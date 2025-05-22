from flask import Flask, render_template, request, jsonify
from query import montar_query
from query import montar_query_top5
from dotenv import load_dotenv
import pymysql
import os

load_dotenv()

app = Flask(__name__, static_folder='static')

# Dados para conectar ao banco de dados
def get_db_connection():
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="root",
        database="api",
        cursorclass=pymysql.cursors.DictCursor 
    )
    print("Conexão feita!")
    return conn


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/graficos")
def chartPage():
    conn = get_db_connection()
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM pais")    
        resultadosPaises = cursor.fetchall()
        
        cursor.execute("Select * from municipios")
        resultadosMunicipios = cursor.fetchall()

    conn.close()
    return render_template('chartPage.html', paises=resultadosPaises, municipios=resultadosMunicipios)

@app.route("/sobre.html")
def sobre():
    return render_template('sobre.html')

@app.route("/insights")
def insightsPage():
    return render_template('insights.html')

@app.route('/filtros', methods=['POST'])
def filtros_dados():
    filtros = request.get_json()
    print("Filtros recebidos:", filtros)

    try:
        query, params = montar_query(filtros)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    

    conn = get_db_connection()
    with conn.cursor() as cursor:
        cursor.execute(query, params)
        resultados = cursor.fetchall()
    conn.close()
    print("Query Filtro de Linha", query)
    print("Resultados da Consulta",resultados)
    if filtros.get("ano") != "todos" and filtros.get("mes") == "todos":
        resposta = []
        for mes in range(1, 13):
            dados_mes = next((row for row in resultados if row.get("mes") == mes), None)
            total_valor_fob = dados_mes.get("total_valor_fob", 0) if dados_mes else 0
            total_kg_liquido = dados_mes.get("total_kg_liquido", 0) if dados_mes else 0
            valor_agregado = round(float(total_valor_fob) / float(total_kg_liquido), 2) if total_kg_liquido else 0
            resposta.append({
                "tipo": filtros.get("tipo"),
                "ano": filtros.get("ano"),
                "mes": mes,
                "municipio": filtros.get("municipio"),
                "pais": filtros.get("pais"),
                "ncm": filtros.get("ncm"),
                "total_valor_agregado": valor_agregado,
                "total_valor_fob": total_valor_fob,
                "total_kg_liquido": total_kg_liquido,
                "total_registros": dados_mes.get("total_registros", 0) if dados_mes else 0
            })

    elif filtros.get("ano") == "todos" and filtros.get("mes") == "todos":
        resposta = []
        for row in resultados:
            total_valor_fob = row.get("total_valor_fob", 0)
            total_kg_liquido = row.get("total_kg_liquido", 0)
            valor_agregado = round(float(total_valor_fob) / float(total_kg_liquido), 2) if total_kg_liquido else 0
            resposta.append({
                "tipo": filtros.get("tipo"),
                "ano": row.get("ano"),
                "municipio": filtros.get("municipio"),
                "pais": filtros.get("pais"),
                "ncm": filtros.get("ncm"),
                "total_valor_agregado": valor_agregado,
                "total_valor_fob": total_valor_fob,
                "total_kg_liquido": total_kg_liquido,
                "total_registros": row.get("total_registros", 0)
            })

    else:
        row = resultados[0] if resultados else {}
        total_valor_fob = row.get("total_valor_fob", 0)
        total_kg_liquido = row.get("total_kg_liquido", 0)
        valor_agregado = round(float(total_valor_fob) / float(total_kg_liquido), 2) if total_kg_liquido else 0
        resposta = {
            "tipo": filtros.get("tipo"),
            "ano": filtros.get("ano"),
            "mes": filtros.get("mes"),
            "municipio": filtros.get("municipio"),
            "pais": filtros.get("pais"),
            "ncm": filtros.get("ncm"),
            "total_valor_agregado": valor_agregado,
            "total_valor_fob": total_valor_fob,
            "total_kg_liquido": total_kg_liquido,
            "total_registros": row.get("total_registros", 0)
        }

    return jsonify(resposta)

@app.route('/filtros_funil', methods=['POST'])
def filtros_dados_funil():
    print("Request data raw:", request.data)
    filtros = request.get_json()
    print("Filtros recebidos:", filtros)
 
    try:
        query, params = montar_query_top5(filtros)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    
    print("Query SQL Funil:", query)
    print("Parâmetros:", params)

    conn = get_db_connection()
    with conn.cursor() as cursor:
        cursor.execute(query, params)
        resultados = cursor.fetchall()
        print(resultados)
    conn.close()
    resposta = []
    
    for row in resultados:
        total_valor_fob = row.get("total_valor_fob", 0)
        total_kg_liquido = row.get("total_kg_liquido", 0)
        valor_agregado = round(float(total_valor_fob) / float(total_kg_liquido), 2) if total_kg_liquido else 0
        #valor_agregado = row.get("total_valor_agregado",0)
        resposta.append({
            "tipo": filtros.get("tipo"),
            "ano": row.get("ano"),
            "mes": row.get("mes") if "mes" in row else None,
            "municipio": filtros.get("municipio"),
            "pais": filtros.get("pais"),
            "total_valor_agregado": valor_agregado,
            "total_valor_fob": total_valor_fob,
            "total_kg_liquido": total_kg_liquido,
            "total_registros": row.get("total_registros", 0),
            "nome_produto": row.get("nome_produto", "").split(";")[0].split(",")[0][:50]
        })
    print(resultados)
    return jsonify(resultados=resposta)




if __name__ == '__main__':
    app.run(debug=True)

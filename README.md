# FATEC Profº Jessen Vidal - São José dos Campos - 1º Semestre DSM - 2024

<p>Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° Semestre do curso Desenvolvimento de software multiplataforma (DSM) em parceria com a equipe Inove do curso de Manufatura avançada no projeto Smart Farming<p>

> _A API se trata de um projeto submetido à metodologia de ensino em implantação na Fatec São José dos Campos, do qual os alunos formam equipes baseadas na metodologia ágil SCRUM, tendo um aluno como Scrum Master, um sendo o Product Owner e o restante dos integrantes como Dev Team._

###  ⏳ Status do projeto: 3/3 Sprint ✅

## Visão Geral
  Este projeto teve como objetivo desenvolver uma API para análise de dados das exportações e importações do estado de São Paulo. A solução permitirá a extração e visualização de informações estratégicas sobre os produtos exportados e importados.
  
## Objetivo do produto
  O sistema será uma ferramenta interativa para auxiliar empresas e órgãos governamentais a entender melhor o panorama das exportações e importações paulistas. Entre os principais recursos, destacam-se:

  - Segmentação de dados por município.

  - Filtros para busca por código de exportação e importação.

  - Visualização da evolução histórica da balança comercial.

  - Normalização e análise de dados entre os anos de 2013 e 2023.

  - Interface web responsiva com gráficos interativos (linha e funil).


  ## 📊 Funcionalidades e Insights

  - Página de insights visuais com gráfico de funil.

  - Filtros por NCM, país destino, cidade de origem, valor agregado e ano.

  - Queries otimizadas para retornar os top 5 produtos com maior valor agregado.

  - Imagem Docker criada e implantada na AWS EC2.

  - Integração com MySQL populado por script Python.


<span id="backlog">

## 📋 Backlog / User Stories

| Rank | Prioridade | User Story | Estimativa | Sprint | Requisitos do Parceiro |
|:----:|:----------:|:----------:|:----------:|:------:|:-----------------------|
| 1 | 🔴 Alta | Eu como cliente, quero ter acesso aos códigos de normalização e formatação das planilhas de exportações internacionais dos municípios Paulistas dos anos de 2013 até 2023 | 20 | 1 | Planilhas dos anos de 2013 até 2023 normalizadas |
| 2 | 🔴 Alta | Eu como cliente, quero poder visualizar o site com os gráficos para visualizar a interface do site e o desenvolvimento do projeto | 20 | 1 | Visualização dos site com os gráficos ainda sem dados / dados fictícios  |
| 3 | 🔴 Alta | Eu como usuário, quero um gráfico de linha para visualização da evolução da balança comercial das exportações dos municipios Paulistas do ano de 2013 até 2023 | 20 | 2 | Visualização da balança comercial de apenas um município por vez |
| 4 | 🔴 Alta | Eu como usuário, no gráfico de linha, quero filtro de cidade origem. | 8 | 2 | Filtro pela cidade de origem |
| 5 | 🔴 Alta | Eu como usuário, no gráfico de linha, quero filtro por pais destino | 8 | 2 | Filtro pelo pais destino |
| 6 | 🔴 Alta | Eu como usuário, no gráfico de linha, quero filtro por código NCM | 8 | 2 | Filtro por código NCM |
| 7 | 🔴 Alta | Eu como usuário, no gráfico de linha, quero filtro de valor agregado | 8 | 2 | Filtro por valor agregado |
| 8 | 🔴 Alta | Eu como usuário, quero um gráfico de funil para visualização das 5 cargas com maior valor agregado por municipio Paulista. | 20 | 3 | Visualização da carga com maior valor agregado |
| 9 | 🔴 Alta | Eu como usuário, no gráfico dos top 5 cargas, quero filtro por código NCM | 8 | 3 | Filtro por código NCM |
| 10 | 🔴 Alta | Eu como usuário, no gráfico dos top 5 cargas, quero filtro de país destino | 8 | 3 | Filtro pelo país destino |
| 11 | 🟠 Média | Eu como usuário, no gráfico dos top 5 cargas, quero filtro de cidade origem. | 8 | 3 | Filtro pela cidade de origem |
| 12 | 🟠 Média | Eu como usuário, no gráfico dos top 5 cargas, quero filtro de valor agregado | 8 | 3 | Filtro por valor agregado |
| 13 | 🟡 Baixa | Eu como usuário, no gráfico dos top 5 cargas, quero filtro por ano da exportação. | 3 | 3 | Filtro pelo ano de exportação |


# FATEC Profº Jessen Vidal - São José dos Campos - 2º Semestre DSM - 2025

<p>Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 2° Semestre do curso Desenvolvimento de Software Multiplataforma (DSM) em parceria com a empresa <b>Newe Log</b>, no projeto de <i>Plataforma Integrada de Gestão</i>.</p>

> _A API se trata de um projeto submetido à metodologia de ensino em implantação na Fatec São José dos Campos, do qual os alunos formam equipes baseadas na metodologia ágil SCRUM, tendo um aluno como Scrum Master, um sendo o Product Owner e o restante dos integrantes como Dev Team._

### ⏳ Status do projeto: 0/3 Sprint 🚧

---

## Visão Geral
  Este projeto tem como objetivo desenvolver uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais da Newe Log.  
  A solução permitirá a visualização de informações, notificações e relatórios de forma integrada, garantindo maior eficiência, controle e redução de erros nos processos internos.  

---

## Objetivo do produto
  O sistema será uma ferramenta interativa para auxiliar na gestão da empresa de forma unificada.  
  Entre os principais recursos, destacam-se:

  - Centralização de dados e processos em uma única plataforma.  
  - Automação e controle de eventos administrativos e treinamentos.  
  - Gestão de clientes e vendas (CRM) com histórico de interações e funil comercial.  
  - Unificação de checklists operacionais atualmente dispersos em diferentes ferramentas.  
  - Relatórios estratégicos e em tempo real para apoio na tomada de decisão.  

---

## 📊 Funcionalidades e Insights

### 🔹 Módulo Administrativo
  - Cadastro de colaboradores.  
  - Notificações automáticas de eventos (via e-mail, WhatsApp, etc).  
  - Confirmação ou recusa de participação, com justificativa.  
  - Registro de conclusão de treinamentos.  
  - Documento padrão gerado automaticamente após o evento.  
  - Consulta de eventos pendentes ou já realizados.  

### 🔹 Módulo Comercial (CRM)
  - Cadastro completo de clientes (nome, endereço, segmento, contatos, departamento).  
  - Histórico detalhado de interações (data, meio de contato e relatório).  
  - Funil de vendas com etapas: **Prospects, Inicial, Potencial, Manutenção, Em Negociação, Follow Up**.  
  - Agendamento de tarefas e lembretes.  
  - Relatórios e gráficos sobre vendas, clientes e interações.  

### 🔹 Módulo Operacional
  - Unificação de checklists usados atualmente (Google Forms, MS Forms, MS Lists).  
  - Checklists operacionais:  
    - Abertura e fechamento da empresa.  
    - Cadastro e verificação de agregados (motorista, veículo, fotos).  
    - Checklist de veículos da frota.  
    - Manutenção predial (excelente/bom/precisa reparo).  
  - Cadastro de agregados com devolutiva automática.  
  - Plataforma única e centralizada para todos os envolvidos.  

---

## ✅ Benefícios esperados
  - Redução de retrabalho e riscos de erro.  
  - Melhor controle e acompanhamento de treinamentos, vendas e operações.  
  - Padronização e centralização dos processos.  
  - Relatórios precisos e em tempo real.  

---

## ⚙️ Requisitos Não Funcionais
  - Manual de Instalação (GitHub).  
  - Manual do Usuário.  
  - Documentação da API (rotas e exemplos).  
  - Modelagem de Banco de Dados Relacional.  

---

## 🖥️ Tecnologias Utilizadas

## 🟢 Sprint 1 - Comercial

| Rank | Prioridade |                                                                                           User Story                                                                                          | Estimativa | Sprint | Requisitos do Parceiro                                                                 |
| :--: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :----: | :------------------------------------------------------------------------------------- |
|   1  |   🔴 Alta  |   Eu como cliente, quero realizar o cadastro completo de clientes e departamento responsável  |      ?     |    1   | Sistema de cadastro de clientes com campos completos                                   |
|   2  |   🔴 Alta  | Eu como cliente, quero acessar o histórico completo das interações com clientes e relatório detalhado da interação |      ?     |    1   | Registro e consulta de histórico detalhado de interações com clientes                  |
|   3  |  🟠 Média  |                  Eu como cliente, quero visualizar um funil de vendas com classificação de clientes em: Prospects, Inicial, Potencial, Manutenção, Em Negociação e Follow Up                  |      ?     |    1   | Funil de vendas com etapas definidas e classificações de clientes ---> *Aqui que acho que ficaria bom colocar tambem um quadro parecido com o do jura, para mostrar onde cada cliente esta*                   |
|   4  |  🟠 Média  |                                               Eu como cliente, quero agendar tarefas e configurar lembretes para próximos contatos com clientes                                               |      ?     |    1   | Sistema de agendamento e lembretes integrado ao cadastro e histórico de clientes       |
|   5  |  🟡 Baixa  |    Eu como cliente, quero gerar relatórios e gráficos quantitativos de interações, vendas efetuadas, clientes cadastrados, clientes por cidade e segmento, com filtros por dia, mês ou ano    |      ?     |    1   | Relatórios e dashboards com filtros e agrupamentos customizáveis                       |
|   6  |  🟡 Baixa  |     Eu como cliente, quero medir o rendimento e a taxa de conversão das visitas em vendas do setor comercial    |      ?     |    1   | Relatórios de desempenho do setor comercial com indicadores de conversão e faturamento |

---

## 🟠 Sprint 2 - Operacional

| Rank | Prioridade |                                                                                                                  User Story                                                                                                                  | Estimativa | Sprint | Requisitos do Parceiro                                                      |
| :--: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :----: | :-------------------------------------------------------------------------- |
|   1  |   🔴 Alta  |                             Eu como cliente, quero unificar todos os checklists e cadastros atualmente utilizados em ferramentas distintas em uma única plataforma                           |      ?     |    2   | Centralização e unificação de checklists e cadastros                        |
|   2  |   🔴 Alta  |                                                     Eu como cliente, quero uma plataforma centralizada para visualização, padronização e simplificação do acesso para todos os envolvidos                                                    |      ?     |    2   | Plataforma única de acesso, visualização e padronização que abranja o setor comercial, operacional e administrativo                    |
|   3  |  🟠 Média  |                                                                 Eu como cliente, quero cadastrar agregados com devolutiva automática após a conclusão do processo de cadastro                                                                |      ?     |    2   | Cadastro de agregados com feedback automático                               |
|   4  |  🟠 Média  | Eu como cliente, quero gerenciar checklists padronizados, para maior controle e organizacao das operacoes |      ?     |    2   | Checklists padronizados para empresa, agregados, frota e manutenção predial |
|   5  |  🟡 Baixa  |                                                                    Eu como cliente, quero que as informações dos fretes concluídos sejam automaticamente repassadas ao RH                                                                    |      ?     |    2   | Integração de dados de fretes concluídos com o setor de RH                  |

---

## 🟡 Sprint 3 - Administrativo

| Rank | Prioridade |                                                                                          User Story                                                                                         | Estimativa | Sprint | Requisitos do Parceiro                                                              |
| :--: | :--------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :----: | :---------------------------------------------------------------------------------- |
|   1  |   🔴 Alta  | Eu como cliente, quero notificações automáticas de eventos com link, confirmação ou recusa justificada, conclusão após participação, formulário de avaliação e documento padrão de registro |      ?     |    3   | Sistema de eventos com notificações, formulários e geração automática de relatórios |
|   2  |   🔴 Alta  | Eu como cliente, quero acompanhar a localização de cada funcionário|      ?     |    3   | Registro de localização de funcionários com histórico atualizado                    |
|   3  |  🟠 Média  |                 Eu como cliente, quero visualizar a quantidade de funcionários e agregados, além dos veículos cadastrados                 |      ?     |    3   | Cadastro de funcionários, agregados e veículos com perfis atualizados               |
|   4  |  🟡 Baixa  |                                                Eu como cliente, quero acessar informações da parte comercial e operacional em um só ambiente                                                |      ?     |    3   | Integração de dados comerciais e operacionais na mesma plataforma                                     |

---


## Tecnlogias utilizadas
<div align="center">
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Microsoft_Teams-6264A7?style=for-the-badge&logo=microsoft-teams&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Python-00000?style=for-the-badge&logo=Python&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/Pandas-00000?style=for-the-badge&logo=Pandas&logoColor=white&color=043873">
<img src="https://img.shields.io/badge/MySQL-0000?style=for-the-badge&logo=MySQL&logoColor=white&color=043873">
</div>

## Metodologia utilizada
  Para a confecção do produto foi empregado o framework de metodologia ágil Scrum, que consiste sumariamente dividir o desenvolvimento do projeto em Sprints, um conjunto de tarefas que devem ser executadas e desenvolvidas em um período pré-definido de tempo. Além disso, foi definido o Backlog do Produto, que são todas as funcionalidades que o software deverá ter com base nos requisitos levantados com o cliente. Uma vez aprovado por ele, para selecionar quais seriam as entregas das Sprints do projeto, primeiro foi definido o MVP de cada Sprint, que é uma versão do produto que prioriza as tarefas que trazem maior entrega de valor para o cliente. Então, a partir disso o Backlog do Produto foi dividido em 4 Backlog de Sprint.


## MVP's

🎥 Acesse diretamente:  
[▶️ Ver vídeo no Google Drive](https://drive.google.com/file/d/1HmgITsIw0_riThABAE-qnakHjtnIiriM/view?usp=drive_link)


# Google Colab: 
https://colab.research.google.com/drive/1O28wrwHK5T3kbF00_QEZJqcLTJb21rAI?usp=sharing




# Como rodar
> _Os códigos e processos presentes neste readme possuem versão para WINDOWS_
## O que será necessário

Para o funcionamento do nosso sistema, você precisara das seguintes tecnologias:

1. [Git](https://git-scm.com/downloads): Utilizaremos o Git para clonar o nosso repositório.

2. [Python](https://www.python.org/downloads/): Precisaremos do python para podermos utilizar de maneira adequada o nosso ambiente virtual, incluímos ele no arquivo requirements, porém sinta-se a vontade caso queira ter uma garantia baixando o python por si só.

## 1º Passo: Clonando o repositório

<details>
  <summary><b>Clique aqui</b></summary>

  Para clonar o projeto e utilizá-lo em seu computador, siga os seguintes passos:
  
  1. Crie uma pasta onde deseja armazenar nosso projeto, e então abra-a e clique na url da pasta, ou então utilize o atalho `Ctrl+L` para selecionar a url, e escreva 'cmd' para abrir o prompt de comando.
  
  > _Obs.: Caso você esteja no LINUX, a parte de escrever "cmd" não irá funcionar, então clique com o botão direito na pasta que você criou e selecione a opção "Abrir no terminal"_

  Um prompt de comando irá se abrir, e então execute o comando abaixo:
  
  ```
  git clone https://github.com/CyberScrums/Projeto-Smart-Farming.git
  ``` 

</details>
<br>

## 2º Passo: Iniciando o ambiente virtual

<details>
  <summary><b>Clique aqui</b></summary>

  1. Após a clonagem, clique com o botão direito na pasta e selecione a opção de abrir com o Terminal, e insira os seguintes comandos :

  ```
  python -m venv venv
  venv\Scripts\activate
  pip install -r requirements.txt (lembre-se de dar primeiro "cd Projeto-Smart-Farm" e em seguida dar "cd src" para entrar na pasta e dar o comando)
  ```

  > _Caso você esteja em LINUX, digite os comandos desta maneira:_<br>
  `python3 -m venv venv`<br>
  `source venv/bin/activate`<br>
  `pip install -r requirements.txt` (lembre-se de dar "cd src" para entrar na pasta e dar o comando)

</details>
<br>

## 3º Passo: criarBanco de Dados

<details>
  <summary><b>Clique aqui</b></summary>

  1. No Terminal Exectue e insira a senha:
  ```
  mysql -u root -p
  ```
  2. Dentro do MySQL execute:
  ```
  source ~/KernelPanic/Database/criarBanco.sql
  ```
</details>
<br>

## 4° Passo : Inserir Dados no Banco
<details>
  <summary><b>Clique aqui</b></summary>

  1.Procure o Arquivo dbDataManipulation.py e coloque suas credencias Root:
  ```
  /KernelPanic/src/dataManipulation-API/dbDataManipulation.py
  ```

  2. No Terminal da pasta Raiz do projeto, execute:
  ```
  python3 /src/dataManipulation-API/dbDataManipulation.py
  ```

</details>
<br>

## 5º Passo: Abrindo a aplicação web

<details>
  <summary><b>Clique aqui</b></summary>

  1. Ainda dentro do ambiente virtual e dentro da pasta src, execute o seguinte comando:
  ```
  flask run
  ```
   
  2. Por fim, entre no link que aparecerá no cmd copiando e colando ele no seu navegador de preferência, ou então simplesmente clique aqui:
    <a href="http://127.0.0.1:5000">http://127.0.0.1:5000</a>

  4. Após finalizar o uso do nosso site, para sair do ambiente virtual, no terminal, execute o atalho `Ctrl+C` para finalizar o serviço do Flask, e então execute o seguinte comando:
  ```
  deactivate
  ```
</details>
<br>

## 🐳 Executando com Docker

<details>
  <summary><b>Clique Aqui</b></summary>

  1. No terminal, navegue até a raiz do projeto e execute o seguinte comando para criar a imagem Docker:

   ```bash
  docker build -t smart-farming-api .
```
  2. Em seguida, execute o container usando:
  ```
  docker run -p 5000:5000 --env-file .env smart-farming-api
  ```
  3. Acesse o sistema no navegador pelo endereço:
  ```
  http://localhost:5000
  ```
</details>

## Equipe <a name="equipe"><a>
|  Foto        |     Função    |           Nome            |                            LinkedIn                            |                      GitHub                       |
| :----: | :-----------: | :-----------------------: | :------------------------------------------------------------: | :-----------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/106409918?v=4" width="75px"> | Scrum Master  | Vitor Serpa da Silva |  [Linkedin](https://www.linkedin.com/in/vitor-serpa-925b46322/)  | [GitHub](https://github.com/VitorSerpa) |
| <img src="https://avatars.githubusercontent.com/u/119637682?v=4" width="75px"> | Product Owner | Heloisa Cardillo | [Linkedin](https://www.linkedin.com/in/heloisa-cardillo-lima/) | [GitHub](https://github.com/heloisa-cardillo) |
| <img src="https://avatars.githubusercontent.com/u/162122368?v=4" width="75px"> | Dev Team      | Daniel Porto Renó Sás Piloto | [Linkedin](https://www.linkedin.com/in/daniel-piloto-98b717226/)  | [GitHub](https://github.com/danprsp) |
| <img src="https://avatars.githubusercontent.com/u/140865436?v=4" width="75px"> | Dev Team      | Henry Vilela Silva Tito |  [Linkedin](https://www.linkedin.com/in/henry-tito-989b4b354/)  | [GitHub](https://github.com/HenryTito)  |
| <img src="https://avatars.githubusercontent.com/u/143196325?v=4" width="75px"> | Dev Team      | João Victor Dos Reis Santos | [Linkedin](https://www.linkedin.com/in/jo%C3%A3o-victor-dos-reis-santos-1823532b4/) | [GitHub](https://github.com/Templasan) |
| <img src="https://avatars.githubusercontent.com/u/144951743?v=4" width="75px"> | Dev Team      | Miguel Tomio Toledo Nonaka |  [Linkedin](https://www.linkedin.com/in/miguel-nonaka)  | [GitHub](https://github.com/miguelnonaka)    |
| <img src="https://avatars.githubusercontent.com/u/102493225?v=4" width="75px"> | Dev Team      | Paula Emy Tamay |  [Linkedin](https://www.linkedin.com/in/paula-tamay-7a168228a/)  | [GitHub](https://github.com/PaulaEmy)    |
| <img src="https://avatars.githubusercontent.com/u/163305926?v=4" width="75px"> | Dev Team      | Vinícius da Silva Leite |  [Linkedin](https://www.linkedin.com/in/vinícius-leite-4792b02ba/)  | [GitHub](https://github.com/vinislvleite)    |


## Equipe <a name="equipe"><a>
|  Foto        |     Função    |           Nome            |                            LinkedIn                            |                      GitHub                       |
| :----: | :-----------: | :-----------------------: | :------------------------------------------------------------: | :-----------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/162122368?v=4" width="75px"> | Scrum Master  | Daniel Porto Renó Sás Piloto | [Linkedin](https://www.linkedin.com/in/daniel-piloto-98b717226/)  | [GitHub](https://github.com/danprsp)           |
| <img src="https://avatars.githubusercontent.com/u/106409918?v=4" width="75px"> | Product Owner | Vitor Serpa da Silva |  [Linkedin](https://www.linkedin.com/in/vitor-serpa-925b46322/)  | [GitHub](https://github.com/VitorSerpa) |
| <img src="https://avatars.githubusercontent.com/u/140865436?v=4" width="75px">|Dev Team| Henry Vilela Silva Tito |  [Linkedin](https://www.linkedin.com/in/henry-tito-989b4b354/)  | [GitHub](https://github.com/HenryTito)  |
| <img src="https://avatars.githubusercontent.com/u/202815299?v=4" width="75px"> | Dev Team      | Lucas Daniel Vasconcellos do Prado |  [Linkedin](https://www.linkedin.com/in/lucas-do-prado-30843b33a/)  | [GitHub](https://github.com/orgs/Kernel-Panic-FatecSjc/people/lucasdaniel0122)    |
| <img src="https://avatars.githubusercontent.com/u/144951743?v=4" width="75px"> | Dev Team      | Miguel Tomio Toledo Nonaka |  [Linkedin](www.linkedin.com/in/miguel-nonaka)  | [GitHub](https://github.com/miguelnonaka)    |
| <img src="https://avatars.githubusercontent.com/u/102493225?v=4" width="75px"> | Dev Team      | Paula Emy Tamay |  [Linkedin](https://www.linkedin.com/in/paula-tamay-7a168228a/)  | [GitHub](https://github.com/PaulaEmy)    |
| <img src="https://avatars.githubusercontent.com/u/163305926?v=4" width="75px"> | Dev Team      | Vinícius da Silva Leite |  [Linkedin](https://www.linkedin.com/in/vinícius-leite-4792b02ba/)  | [GitHub](https://github.com/vinislvleite)    |
| <img src="https://avatars.githubusercontent.com/u/119637682?v=4" width="75px"> | Dev Team | Heloisa Cardillo | [Linkedin](https://www.linkedin.com/in/heloisa-cardillo-lima/) | [GitHub](https://github.com/heloisa-cardillo) |

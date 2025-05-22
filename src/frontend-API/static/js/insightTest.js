document.addEventListener("DOMContentLoaded", () => {

    const dadosGrafID = {
        A:{
            labels : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dataset : [],
            
        },
        B:{},
        C:{},
        D:{}
    }

    const ctx = document.getElementById("chart").getContext("2d");
  
      const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  
      const dataPorPais = {
        "Brasil":     [100, 200, 300, 250, 400, 500, 600, 550, 700, 800, 850, 900],
        "Argentina":  [90, 180, 270, 220, 330, 410, 480, 460, 620, 730, 760, 800],
        "Chile":      [80, 160, 240, 210, 300, 370, 450, 420, 580, 670, 690, 750],
        "Uruguai":    [70, 150, 230, 190, 280, 340, 420, 400, 560, 640, 660, 720],
        "Paraguai":   [60, 140, 220, 180, 260, 320, 390, 370, 540, 610, 630, 700]
      };
  
      const cores = ["#043873", "#28a745", "#ffc107", "#dc3545", "#6f42c1"];
  
      const datasets = Object.entries(dataPorPais).map(([pais, valores], index) => ({
        label: pais,
        data: valores,
        borderColor: cores[index],
        backgroundColor: cores[index],
        fill: false,
        tension: 0, 
        pointRadius: 4,
        pointHoverRadius: 6
      }));
  
      /*criação do Grafico*/

      let Grafico =new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          responsive: true,
          
          plugins: {
            legend: {
              position: "top"
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Meses"
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Exportações (em milhões)"
              }
            }
          }
        }
      });

function atualizargraf(id){
    const grafID = dadosGrafID[id]
    Grafico.data.labels = grafID.labels;
    Grafico.data.datasets = grafID.dataset;
    Grafico.scales.x.title.text = grafID.textA;
    Grafico.scales.y.title.text = grafID.textB;
}
})
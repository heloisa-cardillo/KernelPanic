document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("chart").getContext("2d");

    const cores = ["#043873", "#28a745", "#ffc107", "#dc3545", "#6f42c1"];

    const labelsPadrao = ["Total"];
    const labelsCrescimento = ["2022", "2023"];
    
    const dados = {
        exportacao: {
            A: {
                titulo: "Exportações por País (valor FOB)",
                labels: labelsPadrao,
                data: {
                    "Estados Unidos": [123334575525],
                    "China": [103415979299],
                    "Argentina": [74407935785],
                    "Países Baixos (Holanda)": [25344669098],
                    "México": [25098187624]
                }
            },
            B: {
                titulo: "Exportações por Município (valor FOB)",
                labels: labelsPadrao,
                data: {
                    "São Paulo": [80523546021],
                    "Santos": [50445882308],
                    "São José dos Campos": [46097169804],
                    "São Bernardo do Campo": [43315057106],
                    "Ilhabela": [29736833307]
                }
            },
            C: {
                titulo: "Crescimento na Exportação (2022 → 2023)",
                labels: labelsCrescimento,
                data: {
                    "Estados Unidos": [11624031310, 12727991939],
                    "México": [2343798510, 2901121308],
                    "Canadá": [1096494249, 1623949057],
                    "Portugal": [269108278, 596332479],
                    "Índia": [1029307299, 1355547668]
                }
            },
            D: {
                titulo: "Decaimento na Exportação (2022 → 2023)",
                labels: labelsCrescimento,
                data: {
                    "Chile": [3026472808, 2602835241],
                    "Espanha": [1543024501, 1124119954],
                    "Colômbia": [1910793279, 1525883300],
                    "Irã": [721871836, 377729774],
                    "Paquistão": [371383307, 67508393]
                }
            }
        },
        importacao: {
            A: {
                titulo: "Importações por País (valor FOB)",
                labels: labelsPadrao,
                data: {
                    "China": [162886696005],
                    "Estados Unidos": [151746408102],
                    "Alemanha": [72394732794],
                    "Coreia do Sul": [34469505769],
                    "Japão": [31353699248]
                }
            },
            B: {
                titulo: "Importações por Município (valor FOB)",
                labels: labelsPadrao,
                data: {
                    "São Paulo": [123143427783],
                    "Paulínia": [47364744092],
                    "São Sebastião": [42865636272],
                    "Campinas": [39326812167],
                    "Jundiaí": [35949637650]
                }
            },
            C: {
                titulo: "Crescimento na Importação (2022 → 2023)",
                labels: labelsCrescimento,
                data: {
                    "Rússia": [810306293, 1626201414],
                    "Itália": [2153819949, 2369587539],
                    "Chile": [840021158, 957689751],
                    "Suíça": [1264474348, 1374527310],
                    "Uruguai": [239867640, 346069662]
                }
            },
            D: {
                titulo: "Decaimento na Importação (2022 → 2023)",
                labels: labelsCrescimento,
                data: {
                    "China": [18295086088, 14648177493],
                    "Estados Unidos": [14750539777, 12662876927],
                    "Índia": [3732849179, 2591456583],
                    "Nigéria": [826360418, 86787013],
                    "Indonésia": [677927576, 378241401]
                }
            }
        }
    };

  let tipo = "exportacao", cat = "A", chart;

  function updateChart() {
    const info = dados[tipo][cat];
    const datasets = Object.entries(info.data).map(([l, d], i) => ({
      label: l, data: d,
      backgroundColor: cores[i % cores.length], borderColor: cores[i % cores.length], borderWidth: 1
    }));
    if (chart) {
      chart.config.type = "bar";
      chart.data.labels = info.labels;
      chart.data.datasets = datasets;
      chart.options.scales.y.title.text = info.titulo;
      chart.update();
    } else {
      chart = new Chart(ctx, {
        type: "bar",
        data: { labels: info.labels, datasets },
        options: {
          responsive: true,
          plugins: { legend: { position: "top" } },
          scales: {
            x: { title: { display: true, text: "Período" } },
            y: { beginAtZero: true, title: { display: true, text: info.titulo } }
          }
        }
      });
    }
  }

  updateChart();

  document.getElementById("tipo").addEventListener("change", e => {
    tipo = e.target.value; updateChart();
  });

  document.querySelectorAll(".buttonOption").forEach(btn => {
    btn.addEventListener("click", () => {
      cat = btn.dataset.id; updateChart();
    });
  });
});

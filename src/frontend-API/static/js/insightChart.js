document.addEventListener("DOMContentLoaded", () => {


    const ctx = document.getElementById("chart").getContext("2d");

    const cores = ["#043873", "#28a745", "#ffc107", "#dc3545", "#6f42c1"];

    const labelsPadrao = ["Total"];
    const labelsCrescimento = ["2022", "2024"];
    
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
                titulo: "Crescimento na Exportação (2022 → 2024)",
                labels: labelsCrescimento,
                data: {
                  "Estados Unidos": [11624031310 , 13849529960 ],
                  "Emirados Árabes Unidos": [880438763 , 1535707534 ],
                  "Índia": [1029307299 , 1659197438 ],
                  "Indonésia": [666655421 , 1295888873 ],
                    "Iraque": [175382251 , 575824850 ]
                }
            },
            D: {
                titulo: "Decaimento na Exportação (2022 → 2024)",
                labels: labelsCrescimento,
                data: {
                    "China": [12626084905  , 10512739878 ],
                    "Chile     ": [3026472808 , 2091395569 ],
                    "Espanha   ": [1543024501 , 800321615 ],
                    "Irã       ": [721871836 , 372067829 ],
                    "Argentina ": [6565631700 , 6266880053 ],
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
                titulo: "Crescimento na Importação (2022 → 2024)",
                labels: labelsCrescimento,
                data: {
                    "Rússia": [810306293  , 1734920106   ],
                    "Suíça": [1264474348  , 1264474348   ],
                    "Porto Rico": [355050022  , 680537153   ],
                    "Itália": [2153819949  , 2477541860  ],
                    "Chile": [840021158  , 1128553490     ]
                }
            },
            D: {
                titulo: "Decaimento na Importação (2013 → 2024)",
                labels: labelsCrescimento,
                data: {
                  "China": [18295086088   , 16197552101  ],
                  "Estados Unidos": [14750539777   , 12791132928 ],
                  "Índia": [3732849179  , 2630384172 ],
                    "Nigéria": [826360418   , 104225045 ],
                    "Arábia Saudita": [549347793  , 96605523 ]
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
  maintainAspectRatio: false,
  plugins: { legend: { position: "top" } },
  scales: {
    x: { title: { display: true, text: "Período" } },
    y: { 
      beginAtZero: true, 
      title: { display: true, text: info.titulo },
      ticks: {
        callback: function(value) {
          if (value >= 1e9) return (value / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
          if (value >= 1e6) return (value / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
          if (value >= 1e3) return (value / 1e3).toFixed(1).replace(/\.0$/, '') + 'mil';
          return value;
        }
      }
    }
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


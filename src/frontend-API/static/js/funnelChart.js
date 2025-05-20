(() => {
  let chartFunnel = null;
  let dataSalva;
  let labels;
  let exportData;
  const mesesNomes = [
    "",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("funnelChart");
    const ctx = canvas.getContext("2d");

    // Inicialização do gráfico vazio (sem dados ainda)
    chartFunnel = new Chart(ctx, {
      type: "funnel",
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#021A38",
              "#03234D",
              "#043065",
              "#043873",
              "#164882",
            ],
            datalabels: {
              anchor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0.05 ? "end" : "start";
              },
              align: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0.05 ? "end" : "center";
              },
              font: {
                size: 16,
              },
              formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                const realValue = exportData[context.dataIndex];
                return `${label}\n${realValue.toLocaleString()} USD`;
              },
              color: "#fff",
              textAlign: "center",
            },
          },
        ],
      },
      options: {
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = exportData[context.dataIndex] || 0;
                return `${label}: ${value.toLocaleString()} USD`;
              },
            },
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: true,
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    const button = document.getElementById("buttonSubmitFunnel");
    if (button) {
      console.log("Clicou");
      button.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("loading").style.display = "flex";
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000000);

        const formData = {
          metrica: document.getElementById("funnel-metrica").value,
          tipo: document.getElementById("funnel-tipo").value,
          ano: document.getElementById("funnel-ano").value,
          mes: document.getElementById("funnel-mes").value,
          pais: document.getElementById("funnel-pais").value,
          municipio: document.getElementById("funnel-municipio").value,
        };

        console.log(formData);

        fetch("http://127.0.0.1:5000/filtros_funil", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          signal: controller.signal,
        })
          .then((response) => response.json())
          .then((receivedData) => {
            if (!receivedData || receivedData.length === 0) {
              console.error("Nenhum dado recebido");
              return;
            }

            labels = dataSalva.map((d) => {
              if (d.mes && d.mes !== "todos") {
                return mesesNomes[Number(d.mes)] || d.mes;
              }
              return d.ano || "N/D";
            });

            labels = receivedData.map((d) => d.nome_produto);
            exportData = receivedData.map((d) => d.valor);
            const max = Math.max(...exportData);
            const normalizedData = exportData.map((value) => value / max);

            chartFunnel.data.labels = labels;
            chartFunnel.data.datasets[0].data = normalizedData;
            chartFunnel.update();

            console.log("Gráfico funil atualizado com:", labels, exportData);
          })
          .catch((error) => {
            console.error("Erro ao enviar os dados:", error);
          })
          .finally(() => {
            document.getElementById("loading").style.display = "none";
            clearTimeout(timeoutId);
          });
      });
    }
  });
})();


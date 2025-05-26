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
                                const value =
                                    context.dataset.data[context.dataIndex];
                                return value < 0.05 ? "end" : "start";
                            },
                            align: (context) => {
                                const value =
                                    context.dataset.data[context.dataIndex];
                                return value < 0.05 ? "end" : "center";
                            },
                            font: {
                                size: 14,
                                weight: "bold",
                            },
                            formatter: (value, context) => {
                                const realValue = exportData[context.dataIndex];
                                return `${realValue.toLocaleString()} USD`;
                            },
                            color: "#fff",
                            backgroundColor: "#043873",
                            borderRadius: 6,
                            padding: 6,
                            textAlign: "center",
                            display: "auto",
                        },
                    },
                ],
            },
            options: {
                indexAxis: "y",
                maintainAspectRatio: false,
                responsive: true,
                layout: {
                    padding: {
                        left: 40,
                        right: 40,
                        top: 20,
                        bottom: 20,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            title: () => "",
                            label: function (context) {
                                const value =
                                    exportData[context.dataIndex] || 0;
                                return value.toLocaleString() + " USD";
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        display: true,
                        ticks: {
                            color: "#000000", 
                            callback: function (value) {
                                const label = this.getLabelForValue(value);
                                const maxLineLength = 20; 
                                const maxTotalLength = 60; 

                                let trimmedLabel =
                                    label.length > maxTotalLength
                                        ? label.slice(0, maxTotalLength - 3) +
                                          "..."
                                        : label;

                                const regex = new RegExp(
                                    `.{1,${maxLineLength}}`,
                                    "g"
                                );
                                return trimmedLabel.match(regex);
                            },
                        },
                    },
                },
            },
            plugins: [ChartDataLabels],
        });

        const button = document.getElementById("buttonSubmitFunnel");
        if (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                document.getElementById("loading").style.display = "flex";
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 180000);
                const formData = {
                    metrica: document.getElementById("funnel-metrica").value,
                    tipo: document.getElementById("funnel-tipo").value,
                    ano: document.getElementById("funnel-ano").value,
                    pais: document.getElementById("funnel-pais").value,
                    municipio:
                        document.getElementById("funnel-municipio").value,
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
                        console.log("Dados recebidos:", receivedData);
                        if (
                            receivedData &&
                            Array.isArray(receivedData.resultados)
                        ) {
                            dataSalva = receivedData.resultados;
                            exportData = dataSalva.map(
                                (d) => d.total_valor_agregado
                            );
                        } else {
                            console.error(
                                "Formato dos dados inesperado:",
                                receivedData
                            );
                            return;
                        }
                        labels = dataSalva.map(
                            (d) => d.nome_produto || "Produto desconhecido"
                        );
                        atualizarGrafico();
                        console.log(receivedData);
                    })

                    .catch((error) => {
                        console.error("Erro ao enviar os dados:", error);
                    })
                    .finally(() => {
                        document.getElementById("loading").style.display =
                            "none";
                        clearTimeout(timeoutId);
                    });
            });
        }
    });

    function atualizarGrafico() {
        if (!dataSalva || !Array.isArray(dataSalva)) {
            console.error(
                "Dados inválidos para atualizar o gráfico:",
                dataSalva
            );
            return;
        }
        valores = dataSalva.map((d) => d.total_valor_agregado);
        chartFunnel.data.datasets[0].label = "Valor agregado";
        chartFunnel.data.labels = labels;
        chartFunnel.data.datasets[0].data = valores;
        chartFunnel.update();
        console.log(
            "Gráfico atualizado com labels:",
            labels,
            "e valores:",
            valores
        );
    }
})();

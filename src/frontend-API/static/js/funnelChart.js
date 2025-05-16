document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('funnelChart');
    const ctx = canvas.getContext('2d');

    const exportData = [560, 500, 480, 420, 50];
    const labels = ['Ferro', 'Plástico', 'Bovinos', 'Maquinarios', 'Roupas'];

    const max = Math.max(...exportData);
    const normalizedData = exportData.map(value => value / max);

    new Chart(ctx, {
      type: 'funnel',
      data: {
        labels: labels,
        datasets: [
          {
            data: normalizedData,
            backgroundColor: [
              '#021A38',
              '#03234D',
              '#043065',
              '#043873',
              '#164882'
            ],
            datalabels: {
              anchor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0.05 ? 'end' : 'start';
              },
              align: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0.05 ? 'end' : 'center';
              },
              font: {
                size: 16,
              },
              formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                const realValue = exportData[context.dataIndex];
                return `${label}\n${realValue.toLocaleString()} USD`;
              },
              color: '#fff',
              textAlign: 'center'
            }
          }
        ]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {}, // necessário para ativar
          legend: {
            display: false
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  });
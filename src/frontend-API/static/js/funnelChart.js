document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('funnelChart')
    ctx = canvas.getContext('2d');
  
    const data = {
      labels: ['2013', '2014', '2015', '2016', '2017'],
      datasets: [{
        label: 'Exportações (em milhões USD)',
        data: [500, 520, 480, 510, 530],
        backgroundColor: [
          '#021A38',
          '#03234D',
          '#043065',
          '#043873',
          '#164882',
          '#2A5991',
          '#3F6AA1',
        ],
        borderWidth: 0
      }]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ano',
            color: '#043873'
          },
          ticks: {
            color: '#043873'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Ano',
            color: '#043873'
          },
          ticks: {
            color: '#043873'
          }
        }
      },
    };
  
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });

  
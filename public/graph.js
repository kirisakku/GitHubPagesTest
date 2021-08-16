const ctx = document.getElementById('testChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['8/16', '8/17', '8/18', '8/19', '8/20'],
    datasets: [{
      label: 'real',
      data: [36, 36, 36, 36, 30],
      borderColor: '#FF0000'
    }, {
      label: 'ideal',
      data: [36, 27, 18, 9, 0],
      borderColor: '#00FF00'
    }]
  }
});

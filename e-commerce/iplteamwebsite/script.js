// Example: Bar chart of IPL team wins
// Make sure to include Chart.js in your HTML: 
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('winsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['MI', 'CSK', 'RCB', 'KKR', 'SRH', 'DC', 'RR', 'PBKS'],
                datasets: [{
                    label: 'Total Wins',
                    data: [130, 125, 110, 105, 98, 95, 90, 85], // Example data
                    backgroundColor: [
                        '#005fa2', '#f9cd05', '#d71920', '#3a225d',
                        '#f26522', '#1c4fa1', '#254aa5', '#ed1a37'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'IPL Team Wins'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 10 }
                    }
                }
            }
        });
    }
});
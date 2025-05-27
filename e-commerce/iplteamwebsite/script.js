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
                    legend: { 
                        display: false,
                        labels: {
                            color: '#fff'
                        }
                    },
                    title: {
                        display: true,
                        text: 'IPL Team Wins',
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 20
                        }
                    }
                },
                layout: {
                    padding: 24
                },
                backgroundColor: '#222e3c', // fallback for chart area
                scales: {
                    x: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255,255,255,0.18)' },
                        title: {
                            display: true,
                            text: 'Teams',
                            color: '#fff',
                            font: { weight: 'bold' }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 10, color: '#fff' },
                        grid: { color: 'rgba(255,255,255,0.18)' },
                        title: {
                            display: true,
                            text: 'Wins',
                            color: '#fff',
                            font: { weight: 'bold' }
                        }
                    }
                }
            }
        });
        // Add a semi-transparent dark background to the chart's parent for contrast
        ctx.parentElement.style.background = 'rgba(34,46,60,0.85)';
        ctx.parentElement.style.borderRadius = '16px';
        ctx.parentElement.style.padding = '24px';
        ctx.parentElement.style.boxShadow = '0 4px 24px rgba(34,46,60,0.18)';
    }
});
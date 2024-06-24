document.addEventListener('DOMContentLoaded', (event) => {
    var ctx = document.getElementById('myChart').getContext('2d');

    
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgba(75, 192, 192, 0.5)');
    gradient1.addColorStop(1, 'rgba(75, 192, 192, 0.2)');

    var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgba(153, 102, 255, 0.5)');
    gradient2.addColorStop(1, 'rgba(153, 102, 255, 0.2)');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
                {
                    label: 'Ventas 2023',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: gradient1,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
                    hoverBorderColor: 'rgba(75, 192, 192, 1)',
                    hoverBorderWidth: 3
                },
                {
                    label: 'Ventas 2024',
                    data: [14, 17, 6, 8, 4, 6],
                    backgroundColor: gradient2,
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(153, 102, 255, 0.7)',
                    hoverBorderColor: 'rgba(153, 102, 255, 1)',
                    hoverBorderWidth: 3
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Comparación de Ventas 2023 vs 2024',
                    font: {
                        size: 24
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleFont: {
                        size: 16
                    },
                    bodyFont: {
                        size: 14
                    },
                    padding: 10,
                    cornerRadius: 4
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            onClick: (e) => {
                const activePoints = myChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
                if (activePoints.length) {
                    const firstPoint = activePoints[0];
                    const label = myChart.data.labels[firstPoint.index];
                    const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                    alert(`Etiqueta: ${label}\nValor: ${value}`);
                }
            }
        }
    });
});
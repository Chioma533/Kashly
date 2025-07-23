import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Tooltip, Title } from 'chart.js'
import YearSelector from "../YearSelector"

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);
const options = {
    responsive: true,
    maintainAspectRatio: false,
    Plugin: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `$${context.parsed.y.toLocalestring()}`;
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                    // Format 5000 as 5k, 10000 as 10k, etc.
                    if (value >= 1000) {
                        return value / 1000 + 'k';
                    }
                    return value;
                },
                stepSize: 2000, // optional: control tick step interval
            },
            grid: {
                color: "rgba(255, 255, 255, 0.2)"
            },
        },
        x: {
            grid: { display: false },
            ticks: {
                padding: 10,
            },
            barPercentage: 0.8,
            categoryPercentage: 0.9,
        }
    }
};

const data = {
    labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ],
    datasets: [{
        data: [0, 5000, 8000, 15000, 10000, 8000, 6000],
        backgroundColor: [
            ...Array(11).fill('#fff'), // first 11 months: white
            '#d9ffcc' // last month: light green
        ],
        borderRadius: 10,
        barThickness: 24,
    }]
}
const BudgetChart = () => {
    return (
        <>
            <div className="budget-container">
                <div className="budget-header">
                    <div>
                        <h3>Budget Overview</h3>
                        <p>+$5,432.78</p>
                    </div>
                    <YearSelector />
                </div>
                <div className="chart-wrapper">
                    <Bar options={options} data={data} />
                </div>
            </div>
        </>
    )
}

export default BudgetChart
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPieChart } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Tooltip, Title } from 'chart.js'
import { Link } from 'react-router-dom';
import YearSelector from '../YearSelector';


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

const incomeData = {
    labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ],
    datasets: [{
        label: 'Income',
        data: [0, 15000, 30000, 45000, 60000],
        borderRadius: 10,
        barThickness: 24,
        backgroundColor: "#e2fdb6",
    },
    {
        label: "Expenses",
        data: [1500, 1800, 1700, 2000, 1600],
        borderRadius: 10,
        barThickness: 20,
        backgroundColor: "##3b82f6"
    }]
}
const IncomeExpChart = () => {
    return (
        <>
            <div className="budget-container">
                <div className="budget-header">
                    <div>
                        <h3>Income and Expense year 2025</h3>
                    </div>
                    <ul>
                        <li>
                            <Link to={""} className='sidelink'>
                                <FontAwesomeIcon icon={faPieChart} />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className='sidelink'>
                                <FontAwesomeIcon icon={faChartLine} />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <YearSelector />
                    </ul>
                </div>
                <div className="chart-wrapper">
                    <Bar options={options} data={incomeData} />
                </div>
            </div>
        </>
    )
}

export default IncomeExpChart
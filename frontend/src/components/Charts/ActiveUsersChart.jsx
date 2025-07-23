import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Tooltip, Title } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,  faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                color: '#000',
                stepsize: 20,
            },
            grid: {
                drawTicks: false,
                color: '#ddd',
            },
        },
        x: {
            ticks: {
                color: "#000",
            },
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const data = {
    labels: ['01/11', '04/11', '08/11', '12/11', '16/11', '20/11', '24/11', '28/11', '02/12'],
    datasets: [
        {
            label: "Active Users",
            data: ['90', '130', '70', '40', '100', '120', '140', '135', '150'],
            backgroundColor: '#E1FF84',
            borderRadius: 6,
            barThickness: 24,
        },
    ],
};

const ActiveUsersChart = () => {
    return (
        <div className='ActiveUsers'>
            <div className="ActiveUsers-header">
                <h2>Active Users</h2>
                <div className='ActiveUsers-icons'>
                    <select>
                        <option>Last 30 days</option>
                    </select>
                    <Link className='icon'>
                        <FontAwesomeIcon icon={faDownload} />
                    </Link>
                    <Link className='icon'>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </Link>
                </div>
            </div>
            <div className="ActiveUsers-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default ActiveUsersChart
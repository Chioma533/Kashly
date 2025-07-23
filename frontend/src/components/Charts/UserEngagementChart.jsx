import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJs, LinearScale, Title, Tooltip } from 'chart.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faDownload, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);
const UserEngagementChart = () => {
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
          callback: (value) => `${value}`,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  const data = {
    labels: ['👍', '⭐', '🏆', '👎'],
    datasets: [{
      label: "User Engagement",
      data: [90, 120, 95, 60],
      backgroundColor: '#FFF',
      borderRadius: 10,
      barThickness: 30,
    },
    ],
  };
  return (
    <div className='user-engagement'>
      <div className='UserEngage-header'>
        <h2>User Engagement</h2>
        <div className='ActiveUsers-icons'>
          <select>
            <option>Last 30 days</option>
          </select>
          <Link className='icon'>
            <FontAwesomeIcon icon={faDownload} />
          </Link>
          <Link className='icon'>
            <FontAwesomeIcon icon={faEllipsisH} />
          </Link>
        </div>
      </div>
      <div className="ActiveUsers-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default UserEngagementChart
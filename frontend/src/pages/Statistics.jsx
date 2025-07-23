import React from 'react'
import "../styles/modular.css"
import StatsNav from '../components/StatsComponents/StatsNav'
import ActiveUsersChart from '../components/Charts/ActiveUsersChart'
import UserEngagementChart from '../components/Charts/UserEngagementChart'
import RoleCard from '../components/StatsComponents/RoleCard'
import SavingsRateCard from '../components/StatsComponents/SavingsRateCard'
import TotalUserCard from '../components/StatsComponents/TotalUserCard'
import ActiveUsersCard from '../components/StatsComponents/ActiveUsersCard'


const Statistics = () => {
    return (
        <div className='statistics-wrapper'>
            <StatsNav />
            <div className='stats_container'>
                <div className='stats_Title'>
                    <h3>Financial Overview - Analytics</h3>
                </div>
                <div className="stats_grid">
                    <ActiveUsersChart />
                    <UserEngagementChart />
                    <RoleCard className='span-2'/>
                    <SavingsRateCard />
                    <TotalUserCard />
                    <ActiveUsersCard />
                </div>
            </div>
        </div>
    )
}

export default Statistics
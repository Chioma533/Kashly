import React from 'react'
import "../styles/modular.css"
import Sidebar from '../components/Sidebar'
import OverviewCards from '../components/OverviewCards'
import DashboardNav1 from '../components/DashboardComponent/DashboardNav1'
import BudgetChart from '../components/Charts/BudgetChart'
import IncomeExpChart from '../components/Charts/IncomeExpChart'

const Dashboard = () => {
  return (
    <>
      <section className='DashboardContainer'>
        <Sidebar />
        <main className='DashboardContent'>
          <div>
            <DashboardNav1 />
            <div className='nameholder'>
              <h2 className="ProductName">Kashly Dashboard</h2>
            </div>
            <BudgetChart />
            <OverviewCards />
            <IncomeExpChart />
          </div>
        </main>
      </section>
    </>
  )
}

export default Dashboard
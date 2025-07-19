import React from 'react'
import "../styles/modular.css"
import Sidebar from '../components/Sidebar'
import DashboardNav1 from '../components/DashboardNav1'
import BudgetOverview, { IncomeExpense } from '../components/Charts'
import OverviewCards from '../components/OverviewCards'

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
            <BudgetOverview />
            <OverviewCards />
            <IncomeExpense />
          </div>

        </main>
      </section>
    </>
  )
}

export default Dashboard
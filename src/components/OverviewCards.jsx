import React from 'react'
import "../styles/modular.css"
import TotalSavings from './DashboardComponent/TotalSavings'
import FinInsights from './DashboardComponent/FinInsights'
import TotalExpenses from './DashboardComponent/TotalExpenses'
import BudgetOverview from './DashboardComponent/BudgetOverview'

const OverviewCards = () => {
    return (
        <>
            <div className='Finance-grid'>
                <TotalSavings />
                <TotalExpenses />
                <FinInsights />
                <BudgetOverview />
            </div>
        </>
    )
}

export default OverviewCards
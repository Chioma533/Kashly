import React from 'react'

const FinInsights = () => {
    return (
        <div className='cards'>
            <h3>Financial Insights</h3>
            <div className='savings-card fin-insight'>
                <div>
                    <p>Balance On</p>
                    <h3>${2500}</h3>
                </div>
                <div>
                    <p>Income</p>
                    <h3>+${2500}</h3>
                </div>
                <div>
                    <p>Expenses</p>
                    <h3>-${2500}</h3>
                </div>
                <div>
                    <p>Balance</p>
                    <h3>${3500}</h3>
                </div>
                <div>
                    <p>Projected Savings</p>
                    <h3>+${1500}</h3>
                </div>
                <div>
                    <p>Current Balance</p>
                    <h3>+${2300}</h3>
                </div>
            </div>
        </div>
    )
}

export default FinInsights
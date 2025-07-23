import React from 'react'
import ProgressBar from '../ProgressBar'

const TotalExpenses = () => {
    return (
        <div className='cards'>
            <h3>Total Expenses</h3>
            <div className='savings-card'>
                <div>
                    <ProgressBar label={`Total spent $${4500}`} color='#e2fdb6' showPercentage={false} />
                </div>
                <div className='savings-content'>
                    <div>
                        <p>On Budget</p>
                        <h3>${3000}</h3>
                    </div>
                    <div>
                        <p>Over Budget</p>
                        <h3>${200}</h3>
                    </div>
                </div>
            </div>
            {/* <h3>Total Savings</h3> */}
        </div>
    )
}

export default TotalExpenses
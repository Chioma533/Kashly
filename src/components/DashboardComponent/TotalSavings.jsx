import React from 'react'
import ProgressBar from '../ProgressBar'

const TotalSavings = () => {
    return (
        <div className='cards'>
            <h3>Total Savings</h3>
            <div className='savings-card'>

                <ProgressBar label={`current savings $${5000}`} color='#e2fdb6' showPercentage={false} />

                <div className='savings-content'>
                    <div>
                        <p>Goal Achieved</p>
                        <h3>${8000}</h3>
                    </div>
                    <div>
                        <p>Goal Remaining</p>
                        <h3>${1500}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalSavings
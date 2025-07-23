import React from 'react'
const data = [
  { header: "Goals Achieved", fraction: '85/100', percent: `${95}%` },
  { header: "Tasks", fraction: '19/20', percent: `${75}%` },
  { header: "Assessment", fraction: '6/8', percent: `${80}%` },
  { header: "Quizes", fraction: '72/90', percent: `${85}%` },
]
const SavingsRateCard = () => {
  return (
    <div className='savings-card'>
      <h3>Savings Rate</h3>
      <div>
        <h2>Goals Achieved</h2>
        <div className='progress-container'>
          <span className="progress"></span>
        </div>
        <div>
          <span className="progress-fraction">85/100</span>
          <span className="progress-percent">95%</span>
        </div>
      </div>
    </div>
  )
}

export default SavingsRateCard
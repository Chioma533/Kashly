import React, { useState } from 'react'
import '../styles/modular.css'
const ProgressBar = ({ label,percentage, showPercentage = true, color = "" }) => {
    const [filled, setFilled] = useState(0)
    return (
        <div className='ProgContainer'>
            {label && <p className='label'>{label}</p>}
            <div className='ProgWrapper'>
                <div className="Progress" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
            </div>
            {showPercentage && (
                <span className={styles.percent}>{percentage}%</span>
            )}
        </div>
    )
}

export default ProgressBar
import { faCircleQuestion, faGear, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from  "../assets/images/youthProfile.jpg"
import React from 'react'

const DashboardNav1 = () => {
    return (
        <>
            <nav className='Dashboardnav1'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faWallet} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} />
                    </li>
                    <div>
                        <img src={ProfileImage} alt="No image" />
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default DashboardNav1
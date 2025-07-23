import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faFlagCheckered, faGear, faHouse, faPieChart, faRightFromBracket, faWallet } from "@fortawesome/free-solid-svg-icons"
import "../styles/modular.css"
const Sidebar = () => {
    return (
        <>
            <aside className='Sidebar'>
                <ul>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faWallet} />
                            <span>Bugeting</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faPieChart} />
                            <span>Goals</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faFlagCheckered} />
                            <span>Collaborate</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faChartLine} />
                            <span>Progress</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='sidelink'>
                            <FontAwesomeIcon icon={faGear} />
                            <span>Setting</span>
                        </Link>
                    </li>
                    <div>

                        <li>
                            <Link to={""} className='sidelink'>
                                <span>Add goals</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className='sidelink'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span>Log out</span>
                            </Link>
                        </li>
                    </div>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
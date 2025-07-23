import { faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import KashlyIcon from "../../assets/images/KashlyWhite2.jpg"
import { Link } from "react-router-dom"

const StatsNav = () => {
    return (
        <nav className='stats-nav'>
            <div className='KashlyLogo'>
                <img src={KashlyIcon} alt="No image" />
                <p>Kashly</p>
            </div>
            <div>
                <ul className='nav-items'>
                    <div className='nav-item1'>
                        <li>
                            <Link className='item1-link' to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link className='item1-link'>Budget</Link>
                        </li>
                        <li>
                            <Link className='item1-link'>Saving Goals</Link>
                        </li>
                        <li>
                            <Link className='item1-link'>Analytics</Link>
                        </li>
                    </div>
                    <div className='nav-item2'>
                        <li>
                            <Link to={'/'} className='sidelink'>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'} className='sidelink'>
                                <FontAwesomeIcon icon={faGear} />
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'} className='sidelink'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default StatsNav
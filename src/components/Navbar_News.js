import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar_news.css'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const close = () => setClick(false)

    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='container'>
                <h1>Crypto<span className='primary'>Geek</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li id='link'>
                        <Link onClick={() => navigate('/')}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => navigate('/Coins')}>Crypto</Link>
                    </li>
                    {/* <li>
                        <a href='/'>Latest news</a>
                    </li> */}
                    <li>
                        <Link to='Footer' spy={true} smooth={true} offset={50} duration={500} onClick={close}>Contact us</Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Track Crypto</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar

import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const close =() => setClick(false)
const navigate=useNavigate()
    return (
        <>
        <div className='header'>
            <div className='container'>
                <h1>Crypto<span className='primary'>Geek</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li id='link'>
                        <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={close} >Home</Link>
                    </li>
                    <li>
                    <Link to='Featured' spy={true} smooth={true} offset={50} duration={500} onClick={close}>Crypto</Link>
                    </li>
                    <li>
                        <Link onClick={() => navigate('News')}>Latest News</Link>
                    </li>
                    <li>
                    <Link to='Footer' spy={true} smooth={true} offset={50} duration={500} onClick={close}>Contact us</Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn' onClick={()=> navigate('Coins')}>Track Crypto</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
        </>)
}

export default Navbar

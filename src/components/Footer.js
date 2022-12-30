import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='Footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Contact<span className='primary'>Us</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='https://discord.com/channels/1058322250375364608/1058322250375364611'>Chat</a>
                    <a href='https://discord.com/channels/1058322250375364608/1058322250375364611'>Help Center</a>
                    <a href='https://discord.com/channels/1058322250375364608/1058322250375364611'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developer</h5>
                    <span className='bar'> </span>
                    <p>Nikhl gautam</p>
                    <a href='https://www.facebook.com/profile.php?id=100011421061952'><FaFacebook className='icon' /></a>

                    <a href='www.linkedin.com/in/nikhil-gautam16'><FaLinkedin className='icon' /></a>
                    <a href='https://github.com/Nikhil1601'><FaGithub className='icon' /></a>
                </div>


                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                    <a href='/'><FaFacebook className='icon' /></a>
                    <a href='/'><FaTwitter className='icon' /></a>
                    <a href='/'><FaLinkedin className='icon' /></a>
                    <a href='/'><FaGithub className='icon' /></a>
                </div>
            </div>

        </div>
    )
}

export default Footer

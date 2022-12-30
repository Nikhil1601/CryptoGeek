import React,{useState} from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    
    return (
        <div className='hero' id='hero'>
            <div className='container'>


                <div className='left'>
                    <p>Welcome to world of crypto</p>
                    <h1>Learn about crypto investment by subscribing</h1>
                    <p>Enter your mail id to get newsletter</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>



                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

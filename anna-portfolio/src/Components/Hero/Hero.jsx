import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anna Duong,</span> software engineer from Australia</h1>
        <p>I am a final-year software engineer student from Curtin University, with 8 months of experience in both frontend and backend developement in CBH Group, Deloitte .</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
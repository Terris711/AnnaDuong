import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import resume_pdf from '../../assets/Thi Van Anh Duong (Anna)_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anna Duong,</span> software engineer from Australia</h1>
        <p>I am a final-year software engineer student from Curtin University, with 8 months of experience in both frontend and backend developement in CBH Group and Deloitte .</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href={resume_pdf} download="Anna_Duong_Resume.pdf" className="hero-resume">
                My resume
            </a>
        </div>
    </div>
  )
}

export default Hero
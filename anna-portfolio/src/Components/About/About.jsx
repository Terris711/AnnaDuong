import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p> I am <span>Graduate Software Engineer</span> with a strong work ethic looking for a graduate program or junior position to launch my career. </p>
                        <p> My interested is Cloud Computing, Generative AI, Mobile applications, Web applications, Data Structures and Algorithms. </p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "90%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>C# & .Net</p><hr style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>CI/CD</p><hr style={{width: "40%"}}/></div>
                        <div className="about-skill"><p>Microsoft Azure</p><hr style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>API Management</p><hr style={{width: "55%"}}/></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>INTERNSHIPS</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>REFREES</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>CERTIFICATES</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>HD</h1>
                    <p>CWA</p>
                </div>
            </div>

        </div>

    )
}

export default About
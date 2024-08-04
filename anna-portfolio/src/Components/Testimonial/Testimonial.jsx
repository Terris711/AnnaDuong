import React from 'react'
import './Testimonial.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Testimonial = () => {
    return (
        <div id='testimonial' className='testimonials'>
            <div className="testimonial-title">
                <h1>Testimonials</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="testimonial-container">
                <blockquote>
                    <p>
                        "I had the pleasure of working with Anna during her internship at CBH, where she quickly delivered innovative React and AzureML products. Anna has proven herself to be a superstar in development and would be an excellent fit for any startup or scale-up, especially at a dynamic company. Currently in her final year at Curtin, Anna is actively seeking internship or part-time opportunities to further hone her skills"
                    </p>
                    <footer>
                        <cite>Jordan Faletti - Head of Digital Business Systems at CBH</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Testimonial
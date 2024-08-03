import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/anna-logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <hr/>
            <div className="footer-bottom">
                <p className="fotter-bottom-left">Made with heart © Anna Duong - Graduate Software Enginner</p>
                <div className="footer-bottom-right">
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
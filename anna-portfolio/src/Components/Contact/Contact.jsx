import './Contact.css'

import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3a190d7f-f6ad-4798-bf7a-12ec37c1245a");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message);  
          event.target.reset();
        } else {
          console.log("Error", data);
        }
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently looking for junior position or graduate program, so feel free to send me a message if you are intersted with my profile. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>vananhduong.vn@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>0466288275</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>8 Gladstone Road, Leeming 6149, Western Australia</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

// 3a190d7f-f6ad-4798-bf7a-12ec37c1245a
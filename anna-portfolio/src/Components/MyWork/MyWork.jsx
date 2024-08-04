import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

function MyWork() {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt="Work" />
            <div className="skill-overlay">
              <span>{work.w_skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork
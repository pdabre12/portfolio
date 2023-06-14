import React from 'react'
import Resume from "../../static/resume_PratikDabre.pdf"
const SubHeader = () => {
  return (
    <div className='sub-header'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Ping Me</a>
    </div>
  )
}

export default SubHeader
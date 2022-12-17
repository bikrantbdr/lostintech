import React from 'react'
import './App.css'

const Message = ({ message }) => {
  return (
    <div className="messagebox">
        <div className='msg'>{message}</div>
    </div>

    
  )
}

export default Message
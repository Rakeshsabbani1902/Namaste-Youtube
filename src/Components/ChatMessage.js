import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
         <img className="h-8"  alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s"/>
        <span className='ffont-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
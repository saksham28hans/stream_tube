import React from 'react';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img className = 'h-8 object-cover' src="/images/user_icon.jpg" alt="user_icon" />
      <span className='font-bold p-2'>{name}</span>
      <span className='pl-2'>{message}</span>
    </div>
  );
}

export default ChatMessage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeid } from '../utils/helper';

const LiveChat = () => {
   
    const dispatch = useDispatch()
    const [liveMessage, setliveMessage] = useState("");
    const chatMessages = useSelector(store=> store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage([{
                name : generateRandomName(),
                message : makeid(20)
            },
            {
                name : generateRandomName(),
                message : makeid(20)
            }]))
        }, 2000);
      return () => {
        clearInterval(i);
      };
    }, []);

  return (
    <>
    <div className='p-2 border border-black ml-2 h-[300px] lg:h-[500px] w-[280px] lg:w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.map((c,index)=>(
         <ChatMessage key={index} name={c.name} message={c.message}/>
      ))}
    </div>
    <form className=' w-[280px] lg:w-full ml-2 p-1 border border-black rounded-lg'
     onSubmit={(e)=>{
       e.preventDefault();
       dispatch(addMessage([
        {
            name : "Saksham Hans",
            message : liveMessage
        }
       ]))
       setliveMessage("");
    }}>
        <input className='px-2 ml-2 w-22 lg:w-80 border border-black rounded-lg bg-gray-200' type='text' value={liveMessage} onChange={(e)=>{setliveMessage(e.target.value)}}/>
        <button className='px-5 py-1 mx-5 bg-black text-white rounded-lg'>Send</button>
    </form>
    </>

  );
}

export default LiveChat;

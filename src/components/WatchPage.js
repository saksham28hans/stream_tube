import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    useEffect(() => {
      dispatch(closeMenu())
    }, []);
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 py-4 flex flex-row w-full'>
      <div className='w-full'>
      <iframe className='w-full h-[200px] object-cover md:w-[450px] md:h-[300px] lg:w-[1000px] lg:h-[500px]'  
      src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?&autoplay=1&mute=1"}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
      </div>
      <div className='w-full hidden md:block '>
        <LiveChat />
      </div>
    </div>
    <CommentsContainer />
    </div>
    
  );
}

export default WatchPage;

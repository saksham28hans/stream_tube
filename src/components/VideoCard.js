import React, { useRef } from 'react';
import {useSelector} from 'react-redux'
const VideoCard = ({info}) => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const playerRef = useRef();
  
  const onMouseOver = (e)=>{
  playerRef.current.src = playerRef.current.src + "?&autoplay=1&mute=1";
  console.log(playerRef.current.src)
  }

  const onMouseOut = ()=>{
    console.log(playerRef.current.src)
    playerRef.current.src = playerRef.current.src.slice(0,playerRef.current.src.length-19)
    // playerRef.current.src = playerRef.current.src + "?&autoplay=0&mute=1";
    console.log(playerRef.current.src)
  }
  return (
    <div className={` m-2 w-72 h-[22rem] shadow-lg ${isMenuOpen ? 'md:w-96' : 'md:w-[22rem]'}`}>
    <span className='relative' >
      <img className=" w-full object-cover rounded-lg relative z-[1] hover:z-0 hover:opacity-0" alt="thumbnail" src={info?.snippet.thumbnails.medium.url} onMouseOver={onMouseOver} />
      <iframe id={info.id} ref={playerRef} onMouseOut={onMouseOut} className='absolute top-0 left-0 opacity-0 w-full h-full z-0 hover:z-10 hover:opacity-[1]'  
      src={"https://www.youtube.com/embed/" + info.id}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </span>
      <ul>
        <li className='font-bold py-2'>{info?.snippet.title}</li>
        <li>{info?.snippet.channelTitle}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;

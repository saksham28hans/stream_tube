import React, { useEffect, useState } from 'react';
import { MOST_POPULAR_VIDEO } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setvideos] = useState([]);
  useEffect(() => {
    return () => {
      getVideos();
    };
  }, []);

  const getVideos = async ()=>{
     const data = await fetch(MOST_POPULAR_VIDEO)
     const json = await data.json();
     setvideos(json.items)
  } 
  return (
    <div className='flex flex-col md:flex-row flex-wrap pl-10'>
      {videos.map((info)=> (
       <Link key = {info.id} to={"/watch?v=" + info.id}>
       <VideoCard  info = {info} />
       </Link>
      ))}
      
    </div>
  );
}

export default VideoContainer;

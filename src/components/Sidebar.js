import React from 'react';
import { useSelector} from "react-redux";
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    isMenuOpen &&
    <div className={`px-12 py-8 text-lg shadow-lg w-56 items-center absolute h-screen bg-white md:relative md:bg-transparent md:h-auto`}>
    <ul>
        <li className='pl-4'><Link to="/">Home</Link></li>
        <li className='pl-4'>Shorts</li>
        <li className='pl-4'>Videos</li>
        <li className='pl-4'>Live</li>
      </ul>
      <h1 className='font-bold pt-5 pb-2'>Subscriptions</h1>
      <ul>
        <li className='pl-4'>Music</li>
        <li className='pl-4'>Sports</li>
        <li className='pl-4'>Gaming</li>
        <li className='pl-4'>Movies</li>
      </ul>
      <h1 className='font-bold pt-5 pb-2'>Watch Later</h1>
      <ul>
        <li className='pl-4'>Music</li>
        <li className='pl-4'>Sports</li>
        <li className='pl-4'>Gaming</li>
        <li className='pl-4'>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;

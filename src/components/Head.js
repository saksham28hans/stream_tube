import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, options } from '../utils/constants';
import { useSelector } from "react-redux";
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchedQuery, setsearchedQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.search)
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }
  useEffect(() => {

    if(searchedQuery === "")
     setsuggestions([])

    const timer = setTimeout(()=> { 
      if(searchCache[searchedQuery])
     setsuggestions(searchCache[searchedQuery])
     else
      getSearchedQuery()
    },200)
    
    return () => {
      clearTimeout(timer)
    };
  }, [searchedQuery]);

  const getSearchedQuery = async()=>{
    console.log("API call" + searchedQuery)
    if(searchedQuery !== "")
    {
    const data = await fetch(YOUTUBE_SEARCH_API + searchedQuery,options);
    const json = await data.json();

    setsuggestions(json)

    dispatch(cacheResults({
      [searchedQuery] : json
    }))
    }
  }
  return (
    <div className='grid grid-flow-col px-5 py-2 shadow-lg '>
      <div className='flex col-span-1'>
        <img
        onClick={()=>toggleMenuHandler()} 
        className = 'h-10 md:h-10 cursor-pointer object-cover' src="/images/hamburger.jpg" alt="menu" />
        <a href='/'>
        <img className = 'h-10 hidden max-[500px]:hidden max-[800px]:block md:block object-cover md:h-11 mx-2' src="/images/logo.jpg" alt="logo" />
        </a>
      </div>
      <div className='col-span-10 md:pl-56 mt-1'>
       <div>
        <input className='md:w-1/2 border border-gray-400 rounded-l-full px-5 p-1' 
        value = {searchedQuery} onChange={(e)=>{setsearchedQuery(e.target.value)}} 
        type="text" placeholder='Search'
        onFocus={()=>setshowSuggestions(true)}
        onBlur ={()=>setshowSuggestions(false)}
        />
        <button className='border border-gray-400 px-2 md:px-5 py-1 rounded-r-full bg-gray-100'>
        🔍
        </button>
        </div>
        {searchedQuery && showSuggestions && <div className='absolute bg-white w-[30rem]  shadow-lg rounded-lg border border-gray-100'>
          <ul>
           {suggestions && suggestions?.map(s=><li key={s} className='py-2 px-5 shadow-sm hover:bg-gray-100'>{s}</li>)} 
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className = 'h-10 object-cover' src="/images/user_icon.jpg" alt="user_icon" />
      </div>
    </div>
  );
}

export default Head;

import React from 'react';
import Button from './Button';

const ButtonList = () => {

  const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Virat","JavaScript","Rohit","Comedy"]
  return (
    <div className=' hidden md:flex pl-10 '>
    {list.map((val,i)=>{
       return <Button key = {val} name={val} />
    })}
    </div>
  );
}

export default ButtonList;

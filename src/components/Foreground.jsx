import React, { useRef, useState } from 'react'
import Card from './Card'
function Foreground({data,deleteTask}) {
  const handleDelete = (id) => {
    let updatedData ={...data}
    updatedData.splice(id, 1);
    // const updatedData = data.filter((task) => task.id !== id);
    deleteTask(updatedData);
  };
  const ref =useRef(null);
    // const data=[
    // {desc:"What is your name " ,filesize:"0.9mb",close:true,tag:{isopen:true,tagtitle:"DownloadNow",tagcolor:"green"} ,id :1},
    // {desc:"WHat is your age??  " ,filesize:"0.9mb",close:true,tag:{isopen:true,tagtitle:"DownloadNow",tagcolor:"green"} ,id :2},
    // {desc:" What is the color of sky " ,filesize:"0.9mb",close:true,tag:{isopen:true,tagtitle:"DownloadNow",tagcolor:"blue"},id :3},
    // {desc:" What is the color of sky " ,filesize:"0.9mb",close:true,tag:{isopen:true,tagtitle:"DownloadNow",tagcolor:"blue"},id :4}
    // ]
  return (
          <>
         <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 '>
          {data.map((item,index)=>(
           <Card data={item} reference={ref} key={item.id} onDelete={() => handleDelete(task.id)} />
          ))}
         </div>
        
         </>
  )
}

export default Foreground

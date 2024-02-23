import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
function Delete({onDelete}) {
  // const deleteHandler = (i) => {
  //   let copytask = {...mainTask};
  //   copytask.splice(i, 1);
  //   mainTask(copytask);
  // };
    return (
    <div  id="deleteButton" onClick={onDelete} className='absolute bottom-[20%] right-3 z-[10]  cursor-pointer'>
      <AiTwotoneDelete size="2rem"/> 
    </div>
  )
}

export default Delete
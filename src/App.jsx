import React, { useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Addcard from './components/Addcard';
import Card from './components/Card';
function App() {
  const [data, setData] = useState([{desc:"Description Goes Here " ,time:"time",tag:{tagtitle:"Title Goes Here"} ,id :1},
  ]);
  const addTaskToData = (maintask) => {
    setData([...data,maintask]);
  };
  const deleteTask = (updatedData) => {
    setData(updatedData);
  };
  // const deleteHandler = (i) => {
  //   let copytask = {...mainTask};
  //   copytask.splice(i, 1);
  //   setMainTask(copytask);
  // };
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
     <Background  />
     <Foreground data={data} deleteTask={deleteTask} />
      <Addcard  addTaskToData={addTaskToData}   />
    </div>
  )
}

export default App
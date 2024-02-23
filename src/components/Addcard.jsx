import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hotkeys from 'react-hot-keys';
// import { useHotkeys } from 'react-hotkeys-hook';
import Foreground from './Foreground';
function Addcard({ addTaskToData, }) {
  


const [desc, setdesc] = useState("")
const [tagtitle, settagtitle] = useState("")
const [time, setTime] = useState("")
const [taskbox, setTaskbox] = useState(false)
// const [maintask, setmaintask] = useState({})
const [desc1, setDesc1] = useState('');
const [tagtitle1, settagtitle1] = useState('')
const [time1, settime1] = useState('')
  const maxWords = 10; 
  const maxWords1=4;
  const maxWords2=2;
  const handleTimeChange=(e)=>{
    const inputTime=e.target.value;
    const Words2=inputTime.trim().split(/\s+/);
    if (Words2.length<=maxWords2){
      settime1(inputTime);
    } else{
      alert('You Have Exceeded Your Word Limit')
    }
  }


  const handleTitileChange=(e)=>{
    const inputtitle=e.target.value;
    const words1 = inputtitle.trim().split(/\s+/); 
    if (words1.length<=maxWords1){
    settagtitle1(inputtitle);
    }else {
      alert('You have exceeded the word limit')
    }
  }

  const handleDescChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/); 
    if (inputText.trim() === '') {
      alert('You have not written anything!');
    } else if (words.length <= maxWords) {
      setDesc1(inputText);
    } else {
      // Show a popup or an alert when the word limit is exceeded
      alert('You have exceeded the word limit!');
      // Optionally, truncate the input to fit the limit
      const truncatedText = words.slice(0, maxWords).join(' ');
      setDesc1(truncatedText);
    }
  };
 

    const addtask =()=>{
        const addbtn= document.getElementById("addbtn")
        addbtn.style.scale="1"
        // setTaskbox(true);
    }
    const rembtn =()=>{
      const addbtn= document.getElementById("addbtn")
        addbtn.style.scale="0"
      // setTaskbox(false);
    }
    const submithandler=(e)=>{
      addbtn.style.scale="0"
        e.preventDefault();
        // setmaintask([...maintask, {  desc,filesize:"0.9mb",close:true,tag:{isopen:true,tagtitle,tagcolor:"green"} }]);
        const maintask={  desc,time,tag:{tagtitle}, }
        addTaskToData(maintask); // 
        setdesc('');
        settagtitle('');
        setTime('');    
    }

    
    const notify1=()=>{
      toast.success('TASK ADDED!', {
        position: toast.POSITION.TOP_RIGHT,toastId: customId
      });
    }   
    function handleCtrlZ(event) {
      if (event.ctrlKey && event.key === 'a') {
        event.preventDefault(); // Prevent default browser behavior
        // Call your function here
        addtask(); // Replace 'yourFunction' with your actual function name
      }
    } 
    document.addEventListener('keydown', handleCtrlZ);

    function handletask(event){
      if(event.ctrlKey && event.key==="d"){
      event.preventDefault();
      rembtn();
      }
    }
    document.addEventListener("keydown",handletask)
  return (
    <>
    <div  className=' absolute bottom-4 left-1/2 z-[99] cursor-pointer  '>
     <button onClick={addtask} ><IoMdAdd size="2rem" color='white'/></button>
    </div>
    <div id='addbtn' className='h-[500px] w-[480px] bg-zinc-900 fixed rounded-[5%] bottom-20 left-[34.5%]  
   z-[99] max-w-full  ' style={{scale:  taskbox ? 0 :1}} >
   {/* <div id='addbtn' className='h-[500px] w-[480px] bg-zinc-900/90  rounded-[20%]  scale-1 
   z-[99]  ' > */}
    
    <textarea  id="" cols="23" rows="4" className='  w-[63%]  text-white bg-transparent absolute rounded-lg top-[28.6%] left-[17%]  border-white border-2 border-solid ' type="text" placeholder='ENTER DESC HERE' required  value={desc} 
          onChange={(e) => {
            setdesc(e.target.value),handleDescChange(e);
          }}  ></textarea>
    {/* <input className='  text-white bg-transparent absolute rounded-[3%] top-[13%] left-[11%] border-solid border-2 border-white-200' type="text" placeholder='enter desc here' value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }} />  */}

<textarea cols="27"  rows="4" id="textarea"  className='    text-white bg-transparent    border-2
absolute top-[10%] left-[17%] w-[63%] h-[9%]  rounded-lg ' type="text" placeholder='ENTER TITLE HERE'  required  value={tagtitle} onChange={(e)=>{
            settagtitle(e.target.value),handleTitileChange(e);
          }}  ></textarea>
          {/* <input id='textarea' className='  text-white bg-transparent   absolute  top-[30%] left-[11%]   rounded-[3%] border-solid border-2 border-white-300' type="text" placeholder='enter title here' value={tagtitle} onChange={(e)=>{
            settagtitle(e.target.value);
          }} /> */}
          <input type="text" className=' w-[63%] h-[50px] border-solid border-2 border-white text-white absolute top-[57%] left-[17%] rounded-lg bg-transparent  ' placeholder='TASK COMPLETION TIME' required  value={time} onChange={(e)=>{
            setTime(e.target.value),handleTimeChange(e);
          }}  />
    <button onClick={submithandler}  className=' rounded-lg  border-solid border-2 px-4 py-2 hover:border-green-600 hover:text-green-600 text-white absolute top-[75%] left-[40%]  '>ADD TASK</button>
    
    {/* <input   type='submit' value="addtask" 
      onClick={submithandler} className=' text-white absolute top-[90%] left-[10%] cursor-pointer '></input> */}
    
   <ImCross color='red' onClick={rembtn} className='absolute bottom-1 left-1/2 cursor-pointer'/>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Addcard
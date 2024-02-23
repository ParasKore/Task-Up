import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Addcard from "./Addcard";
// import "react-toastify/dist/ReactToastify.css";
import Delete from "./Delete";

function Card({ data, reference,onDelete }) {
  const customId = "custom-id-yes";
    const [isHidden, setIsHidden] = useState(false);
    const [bgColor, setBgColor] = useState();
    // const handleClick = () => {
    //   setIsHidden(true);

    // };
    
  // const changecolor=(i)=>{
  // const tick= document.getElementById("tick")
  // tick.style.color="green"
  // }
  const notify = () => {
    setBgColor('green');
    toast.success('🦄 TASK COMPLETED!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  // onClick={handleClick}
  return (
    <div id={data.id} >
        <motion.div 
      drag 
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic="0.2"
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden px-8 py-10 " 
      style={{ scale: isHidden ? 0 : 1}} >
      <FaRegFileAlt />
      <button  ><Delete onDelete={onDelete}  /></button>
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 bg-zinc-900 w-full h-19 left-0 text-white">
        <div className="flex items-center justify-between py-1 px-2 ">
          <h5>{data.time}</h5>
        </div>
          <div id="bg123"
            className='tag w-full py-4 bg-blue-600  flex items-center justify-center'
          >
            <h3 className="tag-title">{data.tag.tagtitle}</h3>
                    </div>
      </div>
      <div className="w-7 h-7 rounded-full absolute top-[68%] left-[45%] cursor-pointer ">
           <button onClick={()=>{
            notify(); changecolor(i);
           }} >
            {/* <TiTick id={"tick"}  size="2.5rem" color="bg-blue-800" /> */}
            <TiTick size="2.5rem" color={bgColor === 'green' ? 'green' : 'bg-blue-800'} />
            
            </button>
          </div>
          
    </motion.div>
    <ToastContainer />
    </div>
  );
}



export default Card;

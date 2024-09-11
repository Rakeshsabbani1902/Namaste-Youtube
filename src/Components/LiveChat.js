import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../Utils/helper';
import { Form } from 'react-router-dom';
 
 const LiveChat = () => {
    const [liveMessage , setLiveMessage] = useState("");
    const dispatch = useDispatch();
 

    const ChatMessages=  useSelector((store)=>store.chat.messages);
     
    useEffect(()=>{
        const i = setInterval(()=>{
         //API Polling
      
          dispatch(addMessage({
            name :  generateRandomName(),
            message :makeRandomMessage(20),
          }));
        },500)
        return ()=>clearInterval(i);
    },[])
  return (
    <>
    <div className=" p-2 ml-2 shadow-sm border-black w-full h-[405px]  bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
       {ChatMessages.map((c,index)=>(
                //Don't use index as keys- Disclaimer
                <ChatMessage key ={index} name={c.name} message={c.message}/>
       ))} 
       
    </div>


    <form className="w-full p-1 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        console.log("form Submit");
        dispatch(addMessage({
          name : "Rakesh Sabbani",
          message : liveMessage,
        }));
        setLiveMessage("");
    
    }}>
    <input className="w-96" type='text' value={liveMessage} onChange={(e)=>{
      setLiveMessage(e.target.value);
    }}/>
    <button className="px-2 mx-2 bg-green-200"> Send</button>
    </form>
    </>
  )
}

export default LiveChat;
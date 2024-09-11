import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { useEffect } from 'react';
import {  YOUTUBE_SEARCH_API } from '../Utils/constants';
import {cacheResults} from "../Utils/searchSlice";
import SearchResults from "./SearchResults";
//import {useNavigate} from 'react-router-dom';

import { Link } from 'react-router-dom';


const Head = () => {
    
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const [showResults, setShowResults] = useState(false);

    const searchCache = useSelector((store)=> store.search);
    useEffect(()=>{ 
      
      //make an API call after ever key press
      //but if the difference betweeb 2 API Calls is <200 ms 
      //decline the API Call
       const timer = setTimeout(()=> { 
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestions()
        }
           },200);
       return ()=>{
        clearTimeout(timer); 
       }
   },[searchQuery]);

   const getSearchSuggestions= async()=>{
    console.log("API call"+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API +searchQuery);
    const json= await  data.json(); 
     setSuggestions(json[1]);
     dispatch(cacheResults({
        [searchQuery]: json[1]
     }));

   };  


   const dispatch = useDispatch();
 

   const toggleMenuHandler =  ()  =>  {
      dispatch(toggleMenu());
   }

   const handleSearch= ()=>{

    
    
    console.log(" Show Results"+ showResults );
    setShowResults(true);
   
   }


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
        <a href="/"><img onClick = {()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD9vnKk5oPrEHIthwjMIshbnqJgQDgdAvfA&s"/></a>
        <img  className="h-8 mx-2" alt="youtube-logo " src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"/>
        </div>
        <div className='col-span-10 px-10' >
            <div>
            <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full "  value={searchQuery}  type="text"  onChange={(event)=>setSearchQuery(event.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
            <button  className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100" onClick={()=>handleSearch()}>Search</button>
            {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 " >
                <ul>
                    {suggestions.map(each=>( 
                        <li key={each} className="py-2 px-3 shadow-sm hover:bg-gray-100" ><button >{each}</button></li>
                        ))}
        
                </ul>
            </div>)} 
            </div>
        </div>
        <div className='col-span-1' >
            <img className="h-8"  alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s"/>
        </div>
    </div>
  )
}

export default Head;

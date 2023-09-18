import React, {useEffect, useState } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements,setShowDetailModal,setCurrentElementDetail } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import Categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils } from '@fortawesome/free-solid-svg-icons'


export function SingleCommand(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();



  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
     
        <div class="flex h-24 p-3 my-4 bg-slate-50 w-full shadow rounded-xl">
          <div className="bg-yellow-100 h-full w-28 rounded-xl" style={{backgroundImage: `url('${props.cmd.element.imagepath} ')`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>

          </div>
        
         <div className="mx-3 w-3/4">
         <h1 className=" font-bold">{props.cmd.element.name} </h1>
         <div className="flex">
         <p className="mx-3">jgke</p>
         <p className="mx-3">jgke</p>
       
         </div>
          
          </div> 

         
         
        </div>

    
    
  );

}

export default SingleCommand;

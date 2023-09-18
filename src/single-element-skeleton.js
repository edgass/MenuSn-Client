import React, {useEffect, useState } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import Categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils } from '@fortawesome/free-solid-svg-icons'


export function SingleElementSkeleton() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();



  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
    <div role="status" className="max-w-sm animate-pulse">

     
        <div class="h-60 shadow-xl rounded-xl">
          <div className="relative bg-gray-200 h-3/5 rounded-t-xl dark:bg-gray-700">

            <div className="bg-gray-300 px-2 py-1 w-20 h-6 rounded-2xl absolute top-2 right-2 dark:bg-gray-700 max-w-[300px]">
             
                
             </div>

          </div>
          

         
          
          <div className="mx-3 mt-3 h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[150px]"></div>
          <div className="mx-3 mt-3 h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        
        </div>

    </div>
    
  );

}

export default SingleElementSkeleton;

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


export function SingleElement(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();



  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
    <div onClick={()=>{
      dispatch(setShowDetailModal(true))
      dispatch(setCurrentElementDetail(props.element))
    }} className="">

     
        <div class="h-60 shadow-xl rounded-xl">
          <div className="relative bg-yellow-100 h-3/5 rounded-t-xl" style={{backgroundImage: `url(${props.element.imagepath})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',}}>

            <div className="bg-slate-50 px-2 py-1 rounded-2xl absolute top-2 right-2">
              <p className="font-bold">
              {props.element.prix} FCFA
              </p>
                
             </div>

          </div>
          

         
          <h1 className="mx-3 mt-3 font-bold">{props.element.name} </h1>
          <p className="mx-3">{props.element.description} </p>
        
        </div>

    </div>
    
  );

}

export default SingleElement;

import React, {useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBurger } from '@fortawesome/free-solid-svg-icons'
import { setCurrentCategory } from "../store/category-store";
import { getAllElements,setCatId } from "../store/menu-store";

export function SingleCategory(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const stateElement = useAppSelector(state => state.getAllElements);
  const dispatch = useDispatch();



  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
    <div onClick={()=>{
      dispatch(setCurrentCategory(props.category));
      setCatId(props.category.id)
      dispatch(getAllElements(props.category.id))
    }
      }>
       <div class={state.currentCategory.position === props.category.position ? "relative box-content rounded-2xl bg-black py-3 px-4" : "relative box-content rounded-2xl bg-slate-100 py-3 px-4"}>
       {
        state.currentCategory.position === props.category.position ?
        <FontAwesomeIcon icon={faBurger}  style={{color:"#FFFFFF"}} /> :
          <FontAwesomeIcon icon={faBurger}  style={{color:"#4C4C4C"}} />
          
       }
    
     
    </div>
       <p className="text-center">{props.category.name} </p>
    </div>
   
    
  );

}

export default SingleCategory;

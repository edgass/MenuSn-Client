import React, {useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBurger,faGlassMartiniAlt,faPizzaSlice,faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { setCurrentCategory } from "../store/category-store";
import { getAllElements,setCatId } from "../store/menu-store";

export function SingleCategory(props) {
  const [iconName, setIconName] = useState("");
  const state = useAppSelector(state => state.getAllCategory);
  const stateElement = useAppSelector(state => state.getAllElements);
  const dispatch = useDispatch();



  useEffect(()=>{
    console.log(props.category.name.toLowerCase())
      if(props.category.name.toLowerCase() === "Entrées".toLowerCase()){
        setIconName(faBurger)
      }else if(props.category.name.toLowerCase() === "Boissons".toLowerCase()){
        setIconName(faGlassMartiniAlt)
      }else if(props.category.name.toLowerCase() === "desserts".toLowerCase()){
        setIconName(faPizzaSlice)
      }else{
        setIconName(faGlassMartiniAlt)
      }
      async function fetchEl(){
        dispatch(getAllElements(state.entities[0].id))
     
       
       }
       if(props.category.id == state.entities[0].id){
        fetchEl()
       }
      
  },[
      dispatch
  ])

   return (
    <div className="flex flex-col" onClick={()=>{
      dispatch(setCurrentCategory(props.category));
      setCatId(props.category.id)
      dispatch(getAllElements(props.category.id))
    }
      }>
       <div class={state.currentCategory.position === props.category.position ? "flex flex-col relative box-content rounded-2xl bg-black py-5 px-5 w-5" : "flex flex-col relative box-content rounded-2xl bg-slate-100 py-5 px-5 w-5"}>
       {
        state.currentCategory.position === props.category.position ?
        <FontAwesomeIcon icon={iconName} size="xs"  style={{color:"#FFFFFF"}} /> :
          <FontAwesomeIcon icon={iconName} size="xs"  style={{color:"#4C4C4C"}} />
          
       }
    
     
    </div>
       <p className="text-center">{props.category.name} </p>
    </div>
   
    
  );

}

export default SingleCategory;

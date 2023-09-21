import React, {useEffect, useState } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements,setShowDetailModal,setCurrentElementDetail } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import Categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { setCommand,deleteCommandeItem } from "./store/command-store";
import { SingleCommandElementInCommand } from "./command/single_command_element_in_command";
import SingleElementInCommandeModel from "./model/single_element_in_command_model";


export function SingleCommand(props) {
  const [qtt, setQtt] = useState(props.cmd.quantity);
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
        
         <div className="flex flex-col mx-3 w-3/4">
         <h1 className=" font-bold">{props.cmd.element.name} </h1>

         <div className=" flex justify-between place-items-end w-full mt-3">
              <div className=" flex justify-around h-7">
              <div onClick={()=>{
                  if(qtt == 1 | qtt < 1){
                    setQtt(1)
                  }else{
                    dispatch(setCommand(new SingleElementInCommandeModel(props.cmd.element,-1)))
                    setQtt(qtt-1)
                  }
                 
                }} className=" px-2 bg-slate-200 rounded">
                  -
                </div>
                <div className=" px-2">
                  {qtt}
                </div>
                <div onClick={()=>{
                  console.log(props.cmd)
                  dispatch(setCommand(new SingleElementInCommandeModel(props.cmd.element,1)))
                  setQtt(qtt+1)
                }} className="px-2 bg-slate-200 rounded">
                  +
                </div>
              </div>
              <FontAwesomeIcon onClick={()=>dispatch(deleteCommandeItem(new SingleElementInCommandeModel(props.cmd.element,0)))} icon={faTrashCan} style={{color: "#db6161",}} />
             
             
              </div>

          
          </div> 

         
         
        </div>

    
    
  );

}

export default SingleCommand;

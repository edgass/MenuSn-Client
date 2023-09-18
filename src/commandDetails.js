import React, {useEffect, useState } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements,setShowDetailModal } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SingleCommand from "./single-command";
import { Button } from "primereact/button";
import { getCommand, setShowCommandDetails } from "./store/command-store";


export function CommandDetails() {
  const [qtt, setQtt] = useState(1);
  const state = useAppSelector(state => state.getAllCategory);
  const stateElement = useAppSelector(state => state.getAllElements);
  const stateofCommand = useAppSelector(state => state.command);
  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(getCommand())
    console.log(stateofCommand.entities)
  },[
      dispatch
  ])

   return (
    <div className="h-full static">
         
          <div className="z-0 bg-orange-500 h-1/4 absolute top-0 w-full rounded-b-3xl">
            <div className="static">
              <div className="flex justify-start m-6">
              <FontAwesomeIcon onClick={()=>dispatch(setShowCommandDetails(false))} icon={faArrowLeft} size="2xl" style={{color: "#ffffff",marginRight:"12"}} />
              <p className="text-xl font-bold text-white">Ma commande </p>
              
              </div>
           
            
            </div>
           
          </div>

          <div className="relative top-20 z-10 h-3/5 overflow-hidden  mx-8 my-0">

          <div className="absolute inset-0 z-30 bg-gradient-to-b from-orange-500 h-20 w-full m-0"></div>
          {
           
            <div className="overflow-auto z-30 h-full mt-6 mb-6">
                {
                   stateofCommand.loading === "pending" ? <p>Loading...</p> :
                  stateofCommand.entities.map(cmd=>{
                  return(
                    <SingleCommand cmd ={cmd} />
                  )
                  })
                }
             </div>
            
          }
          
           
          
          

           <div className="absolute bottom-0 z-30 bg-gradient-to-t from-slate-50 h-20 w-full m-0"></div>
           
            </div>

            <div className="absolute bottom-0  w-full p-12">
              <div className="flex justify-between">
                <p className="font-bold text-2xl">Total</p>
                <p className="font-bold text-2xl">15000 FCFA</p>
              </div>
              <div className="flex justify-center mt-3">
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 w-full rounded-xl">
                Valider
              </button>
              </div>
            </div>
        
        
        

    </div>
    
  );

}

export default CommandDetails;

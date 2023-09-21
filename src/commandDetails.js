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
import { getCommand, postNewCommand, reset, setShowCommandDetails,setTotalPriceOfCommand } from "./store/command-store";
import toast from 'react-hot-toast'
import AnimatedNumber from "react-animated-numbers";


export function CommandDetails() {
  const [clientName, setClientName] = useState("");
  const [totalPriceOfCommand,setTotalPriceOfCommand] = useState(0)
  const state = useAppSelector(state => state.getAllCategory);
  const stateElement = useAppSelector(state => state.getAllElements);
  const stateofCommand = useAppSelector(state => state.command);
  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(getCommand())

  },[
      dispatch
  ])

   return (
    <div className="h-full static">
         
          <div className="z-0 bg-[#F59E0B] h-1/4 absolute top-0 w-full rounded-b-3xl">
            <div className="static">
              <div className="flex justify-start m-6">
              <FontAwesomeIcon onClick={()=>dispatch(setShowCommandDetails(false))} icon={faArrowLeft} size="2xl" style={{color: "#ffffff",marginRight:"12"}} />
              <p className="text-xl font-bold text-white">Ma commande </p>
              
              </div>
           
            
            </div>
           
          </div>

          <div className="relative top-20 z-10 h-2/4 overflow-hidden  mx-8 mb-3">

          <div className="absolute inset-0 z-30 bg-gradient-to-b from-[#F59E0B] h-16 w-full"></div>
          {
           
            <div className="overflow-auto z-30 h-full mt-6">
                {
                   stateofCommand.loading === "pending" ? <p>Loading...</p> :
                   stateofCommand.entities.length == 0 ?
                   <div className="h-full flex items-center justify-center">
                    <p className="text-center">Votre commande est actuellement vide ! Sélectionnez des éléments dans notre menu numérique pour les ajouter à votre commande.</p>
                   </div> :
                  stateofCommand.entities.map(cmd=>{
                  return(
                    <SingleCommand cmd ={cmd} />
                  )
                  })
                }
             </div>
            
          }
          
           
          
          

           <div className="absolute bottom-0 z-30 bg-gradient-to-t from-slate-50 h-3 w-full m-0"></div>
           
            </div>

            <div className="z-40 absolute bottom-0 h-auto w-full px-12 pb-8">
              <div className="flex justify-between mb-4 inline-block align-bottom">
                <p className="font-bold text-xl">Total</p>
                <div className="flex justify-center">
                <AnimatedNumber
                  fontStyle={{ fontWeight:"bold", fontSize: 20 }}
                  animateToNumber={stateofCommand.totalPriceOfCommand}
                  includeComma
                  config={{ tension: 89, friction: 40 }}
                 
               //   animationType={"calm"}
                />
               {/* <p className="font-bold text-xl">  FCFA</p> */}
                </div>
               
              </div>
              
           { stateofCommand.loading === "succeded" ?
           <div>
            <p className="font-xs">Commande prise en charge, veuillez patienter en attendant la livraison</p>
            <div className="mt-3">
            <Button onClick={()=>{
              localStorage.removeItem("command")
              dispatch(reset())

              
            }} className="text-white font-bold py-4 px-4 w-full p-button-rounded p-button-warning mt-3" label="Nouvelle Commande" />
            </div>  
           
           </div> :
           <div>
            <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom (Non obligatoire)</label>
                  <input onChange={(val)=>{
                    setClientName(val.target.value)
                    console.log(clientName)
                  } } type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ex : Fallou"/>
                </div>
              <div className="flex justify-center mt-3">
                
             {/* <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 w-full rounded-xl">
                Valider
        </button> */}
             { stateofCommand.loading == "pending" ?
              <Button className="text-white font-bold py-4 px-4 w-full p-button-rounded p-button-warning" label="Valider" loading /> :
              <Button onClick={()=>{
  
                if(stateofCommand.entities.length == 0){
                  toast.error("Votre commande est vide")
                  
                }else{
                  dispatch(postNewCommand(clientName))
                }
                
              }} className="text-white font-bold py-4 px-4 w-full p-button-rounded p-button-warning" label="Valider" />
              }
              </div>
            </div>}
            </div>
        
        
        

    </div>
    
  );

}

export default CommandDetails;

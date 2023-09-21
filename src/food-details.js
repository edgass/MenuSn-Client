import React, {useEffect, useState } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements,setShowDetailModal } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import Categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils } from '@fortawesome/free-solid-svg-icons'
import { setCommand } from "./store/command-store";
import SingleElementInCommandeModel from "./model/single_element_in_command_model";
import { Toaster } from "react-hot-toast";



export function FoodDetails(props) {
  const [qtt, setQtt] = useState(1);
  const state = useAppSelector(state => state.getAllCategory);
  const stateElement = useAppSelector(state => state.getAllElements);
  const dispatch = useDispatch();



  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
    <div className="h-full static">
       
       <div className="z-40">
       <Toaster
          position="top-center"
          reverseOrder={false}
        />
       </div>
      
          <div className="relative z-0 bg-yellow-100 h-3/5" style={{backgroundImage: `url(${stateElement.currentElementDetails.imagepath} )`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',}}>

            <div onClick={()=>dispatch(setShowDetailModal(false))} className="grid place-items-center bg-slate-50 w-8 h-8 rounded-full absolute top-2 left-2">
              <p className="font-bold">
              X
              </p>
                
             </div>

          </div>
          
          <div className="z-10 bg-slate-50 h-2/4 absolute bottom-0 w-full rounded-t-3xl">
          

            <div className="static">
           
            <p className="m-6 text-3xl font-bold">{stateElement.currentElementDetails.name} </p>
            <p className="m-6 ">{stateElement.currentElementDetails.description}</p>
           <div className="px-8 absolute bottom-6 w-full">
            <div className="justify-start w-1/3 ">
              <div className="mx-28 my-3 flex justify-around">
                <div onClick={()=>{
                  if(qtt == 1 | qtt < 1){
                    setQtt(1)
                  }else{
                    setQtt(qtt-1)
                  }
                 
                }} className="py-3 px-5 m-2 bg-slate-200 rounded-xl">
                  -
                </div>
                <div className="p-3 m-2">
                  {qtt}
                </div>
                <div onClick={()=>setQtt(qtt+1)} className="py-3 px-5 m-2 bg-slate-200 rounded-xl">
                  +
                </div>
                <div  className="m-2 ">
                {qtt*stateElement.currentElementDetails.prix} FCFA
                </div>
              </div>
            </div>
            <div className="md:w-2/4 flex items-center justify-around">
              <button onClick={
                 ()=>{
                  dispatch(setCommand(new SingleElementInCommandeModel(stateElement.currentElementDetails,qtt)))
                 // props.onChangeShowModalState(false)
            //      openSuccessAddToCommand(props)
                  /* props.onChangeShowModalState(false) */
                }
              } class="bg-black hover:bg-slate-800 text-white font-bold py-5 px-4 border border-blue-700 rounded-3xl">
                Ajouter à ma commande
              </button>

              <button onClick={()=>dispatch(setShowDetailModal(false))} class="bg-[#F59E0B] hover:bg-[#F59E0B] text-white font-bold py-5 px-7 rounded-3xl">
                X
              </button>
              </div>
           </div>
            </div>
           
          </div>
         
        
 
    </div>
    
  );

}

export default FoodDetails;

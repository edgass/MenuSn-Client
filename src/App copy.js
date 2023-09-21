import React, {useEffect, useState,useRef,useLayoutEffect } from "react";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements,setShowDetailModal } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
import Categorys, { CategorysDisplay } from "./categorys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUtensils } from '@fortawesome/free-solid-svg-icons'
import SingleElement from "./single-element";
import ElementList from "./element-list";
import ElementListSkeleton from "./element-list-skeleton";
import Sheet from 'react-modal-sheet';
import FoodDetails from "./food-details";
import { Command } from "./command/command";
import CommandDetails from "./commandDetails";
import { setShowCommandDetails } from "./store/command-store";
import { Toaster } from "react-hot-toast";


export function App2() {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);
  const state = useAppSelector(state => state.getAllCategory);
  const stateElements = useAppSelector(state => state.getAllElements);
  const stateCommand = useAppSelector(state => state.command);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(elementRef.current.offsetHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(()=>{
    
  },[
      dispatch
  ])

   return (
    <div className="relative">


        <nav ref={elementRef} className="z-10 h-1/4 bg-slate-50 w-full sticky top-0">
          <div onClick={()=>dispatch(setShowCommandDetails(true))} className="bg-yellow-100 h-3/4" style={{backgroundImage: `url('http://pointe.hotelfleurdelysdakar.com/wp-content/uploads/2022/04/1122647.jpg')`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',}}>
         
           <div onClick={()=>setShowCommandDetails(true)} className="animate-ping grid  place-items-center h-12 w-12 bg-slate-50 rounded-full absolute top-4 right-4">
           <FontAwesomeIcon icon={faUtensils} />
           </div>
           <div  onClick={()=>setShowCommandDetails(true)} className="grid  place-items-center h-12 w-12 bg-slate-50 rounded-full absolute top-4 right-4">
           <FontAwesomeIcon icon={faUtensils} />
           </div>
          </div>

          
          
          
          <div className="bg-slate-50 px-3">
          <h1 className="my-3 ml-1 text-xl font-bold">Hôtel Fleur de Lys</h1>
            <CategorysDisplay/>
          </div>
        
        </nav>
        <div className="z-0" style={{marginTop:parseInt(height+100)}}>
        <ElementList/>
        </div>

        
        <Sheet tweenConfig= {{ease: 'easeOut', duration: 0.3}}  isOpen={stateElements.showDetailsModal} onClose={() =>dispatch(setShowDetailModal(false))}>
        <Sheet.Container>
          <Sheet.Header>
           <div>

           </div>
          </Sheet.Header >
          <Sheet.Content><FoodDetails/></Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

      <Sheet tweenConfig= {{ease: 'easeOut', duration: 0.3}}  isOpen={stateCommand.showCommandDetails} onClose={() =>dispatch(setShowCommandDetails(false))}>
        <Sheet.Container>
          <Sheet.Header>
           <div>

           </div>
          </Sheet.Header >
          <Sheet.Content>

            <CommandDetails></CommandDetails>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

    


    </div>
    
  );

}

export default App2;

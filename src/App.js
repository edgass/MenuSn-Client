import React, {useEffect, useState } from "react";
//import { useEffect, useRef, useState } from "react";
import { Plats } from "./Plats/Plats";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
export function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();

/*   const getComponent = ()=>{
    switch(state.loading){
      case 'pending' : 
        return <></>;
      case 'failed' :
        return <></>;
      case 'succeded':
        return <Plats/>;
      default:
        return <></>  ;
    }
  }
   */


  useEffect(()=>{
    dispatch(getAllCategory());
  },[
      dispatch
  ])

   return (
    state.loading === "pending" ? <div className="flex justify-center bg-white items-center flex-col">loading...</div> : 
    <div className="flex justify-center bg-white items-center flex-col">
      <div className="justify-center relative flex flex-row scroll-smooth z-10 bg-white overflow-x-auto space-x-8 w-5/6" id="myHeader">
        <div className="flex flex-row border-b justify-center ">
          
          {state.entities.map((tab) => {
            return (
              <button 
                key={tab.position}
              //  ref={(el) => (tabsRef.current[idx] = el)}
                className={activeTabIndex === tab.position ? "pt-2 pb-3 px-10 active_underline"  : "pt-2 pb-3 px-10 inactive_underline" }
                onClick={() => {
                  console.log(tab.id)
                  setActiveTabIndex(tab.position);
                  dispatch(addCatToSearch(tab.id))
               //  addElementCatToSearch(tab.position)
                }}>
                {tab.name}
              </button>
            );
          })}
          

      
        </div>
      </div>
{       <div className="py-4 z-0">
  <Plats></Plats>
        {/* {tabsData[activeTabIndex].content} */}

      </div>}
    </div>
  );

}

export default App;

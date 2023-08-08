import React, {useEffect, useState } from "react";
//import { useEffect, useRef, useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { Plats } from "./Plats/Plats";
import './header.css'
import { getAllCategory } from "./store/category-store";
import { addCatToSearch,getAllElements } from './store/menu-store'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
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
      <div className="justify-center bg-white w-5/6 space-x-8" id="myHeader">
        <div className="lg:justify-center md:justify-center flex flex-row overflow-scroll m-auto scroll-smooth">
{/*           <TabView>
          {state.entities.map((tab) => {
            return (
              <TabPanel header={tab.name}>
          
              </TabPanel>
            );
          })}
          </TabView> */}
          
          {state.entities.map((tab) => {
            return (
              <button 
                key={tab.position}
              //  ref={(el) => (tabsRef.current[idx] = el)}
                className={activeTabIndex === tab.position ? "pt-2 pb-3 px-10 active_underline"  : "pt-2 pb-3 px-10 inactive_underline" }
                onClick={() => {
                  console.log(tab.id)
                  setActiveTabIndex(tab.position);
                  dispatch(getAllElements(tab.id))
               //  addElementCatToSearch(tab.position)
                }}>
                {tab.name}
              </button>
            );
          })}

      
        </div>
      </div>
{       <div className="">
 { <Plats></Plats>}
        {/* {tabsData[activeTabIndex].content} */}

      </div>}
    </div>
  );

}

export default App;

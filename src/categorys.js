import React, {useEffect, useState } from "react";
import './header.css'
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import SingleCategory from "./partial/single-category";
import { getAllCategory,setCurrentCategory } from "./store/category-store";
import { getAllElements } from "./store/menu-store";

export function CategorysDisplay() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();



  useEffect(()=>{
    async function fetchCat(){
     dispatch(await getAllCategory());
    
    }
   fetchCat()
  
    
    
  },[
      dispatch
  ])

   return (
    <div className="flex flex-row overflow-x-scroll pb-3 mx-3 space-x-6">
  {state.entities.map((tab) => {
            return (
              <SingleCategory key={tab.position} category={tab}/>
    
            );
          })}

    
    </div>
   
  );

}

export default CategorysDisplay;

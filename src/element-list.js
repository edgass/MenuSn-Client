import React, {useEffect, useState, useRef } from "react";
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import SingleElement from "./single-element";
import SingleElementSkeleton from "./single-element-skeleton";
import ElementListSkeleton from "./element-list-skeleton";

export function ElementList() {
  const state = useAppSelector(state => state.getAllElements);
  const dispatch = useDispatch();




  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
  
      state.loading === "pending" ? <ElementListSkeleton/> :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-3 gap-4">
        {
          state.entities.map(el=>{
            return(
              <SingleElement element={el} />
            )
          })
        }
      
      
      </div>
   
   
   
    
  );

}

export default ElementList;

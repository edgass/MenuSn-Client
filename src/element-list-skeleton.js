import React, {useEffect, useState, useRef } from "react";
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";
import SingleElement from "./single-element";
import SingleElementSkeleton from "./single-element-skeleton";

export function ElementListSkeleton() {
  const state = useAppSelector(state => state.getAllCategory);
  const dispatch = useDispatch();




  useEffect(()=>{
  
  },[
      dispatch
  ])

   return (
    <div role="status" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-3 gap-4 animate-pulse">
      <SingleElementSkeleton/>
      <SingleElementSkeleton/>
      <SingleElementSkeleton/>
      <SingleElementSkeleton/>
    </div>
   
    
  );

}

export default ElementListSkeleton;

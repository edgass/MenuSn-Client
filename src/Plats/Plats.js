import React from 'react';
import { SingleFood } from "../single_food";
import {useDispatch} from 'react-redux'
import {useAppSelector} from '../hook'
import {getAllElements} from '../store/menu-store'
import { useEffect } from "react";


export function Plats(){

    const state = useAppSelector(state => state.getAllElements)
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllElements());
    },[
        dispatch
    ])

/*     const plats = [
        {
            id:1,
            name:"Poulet Rotie",
            prix:"5000",
            link:"https://assets.afcdn.com/recipe/20200227/108291_w1024h1024c1cx1824cy2736.webp"
        },
        {
            id:2,
            name:"Fast Food",
            prix:"4000",
            link:"https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        },
        {
            id:3,
            name:"Besancon",
            prix:"6000",
            link:"https://media-cdn.tripadvisor.com/media/photo-s/22/01/90/86/plat-du-restaurant-l.jpg"
        },
        {
            id:4,
            name:"Plancha Crémeux",
            prix:"3000",
            link:"https://i.pinimg.com/736x/c6/d4/23/c6d423b696722c58b001dd8d75929bb8--plating-ideas-food-plating.jpg"
        },
    ] */
    return(
        state.loading ==='pending' ? <div>loading...</div> :
        <div className="px-10 py-5 w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
           { state.entities.map((plat) => (<SingleFood name={plat.name} price={plat.prix} link={plat.image}/>))}

     </div>
    )

}

export default Plats;
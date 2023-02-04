import React from "react"

export function SingleFood(props){
    return (
        <a href="khihk" className="w-1/6 relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div  className="rounded-3xl bg-slate-50 py-8 shadow grid place-items-center m-6">
                <div style={{backgroundImage:`url(${props.link})`}} className="w-32 bg-black h-32 rounded-full -mt-16 mb-6 shadow-xl bg-center bg-cover"/>   
                <h2 class="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg" title="">{props.name}</h2>
                <div class="my-3">
                    <p class="line-clamp-1 text-lg text-gray-800">{props.price} FCFA </p>
                </div>
                <button class="bg-amber-500 px-3 py-2 rounded-2xl shadow ">Ajouter à ma commande</button>
            </div>    
           
            
        </a>
       
    )
}
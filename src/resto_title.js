import React from 'react';
import './header.css'
export function RestoTitle(){
    return(
        <div className="mt-6 flex justify-center items-center flex-col">
            <div className="">
             <img className="w-40 h-40 mr-3 h-6 sm:h-9" src="https://terroubi.com/wp-content/uploads/2022/06/cropped-logo-TB-or-sans-fond-e1664380556987.png" alt="Logo" />  
            </div>
            
            <h1 className="text-5xl	mt-4 mb-12">Menu du Jour</h1>
        </div>
    )
}
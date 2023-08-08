import React from 'react';
import { RestoTitle } from "./resto_title";
export function MainHeader(){
    return(
<header className="bg-white w-full">
    <div className=''>
         <nav className="bg-white border-gray-200 px-4 lg:px-2 py-2.5 dark:bg-gray-800">
            <div className="flex space-x-4 justify-between items-center mx-auto max-w-screen-xl">
                <a href="qjlhk" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MenuSn</span>
                </a>
                <div className="flex items-center">
                    <a href="qgiy" className="text-black bg-amber-200 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-blue-800">Comment Commander ?</a>
                </div>
            </div>
        </nav>
       
        <RestoTitle></RestoTitle>
       
       
    </div>
       
    </header>
    )
}
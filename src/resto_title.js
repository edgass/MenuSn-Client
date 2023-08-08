import React from 'react';
import { useDispatch } from 'react-redux';
import { Command } from './command/command';
import './header.css'
import { useAppSelector } from './hook';
export function RestoTitle(){

    const stateCommand = useAppSelector(state =>state.command)
    const dispatch = useDispatch()
    return(
        <div className="mt-6 flex justify-center items-center flex-col w-full">
            <div className="">
                <Command></Command>
           {/* {  <img className="w-40 h-40 mr-3 h-6 sm:h-9" src="https://terroubi.com/wp-content/uploads/2022/06/cropped-logo-TB-or-sans-fond-e1664380556987.png" alt="Logo" />} */}
            </div>
            
            <h1 className="text-2xl	mt-4 mb-4">Menu</h1>
        </div>
    )
}
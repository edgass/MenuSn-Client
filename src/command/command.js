import { SingleCommandElementInCommand } from "./single_command_element_in_command";
import {useState,useEffect} from 'react'
import {useAppSelector} from '../hook'
import {getCommand, setCommand,setShowConfirmCommandModal,setShowDeleteCommandModal } from "../store/command-store";
import {useDispatch} from 'react-redux'
import Element from "../model/element_model";
import SingleElementInCommandeModel from "../model/single_element_in_command_model";
import { ConfirmCommanModal } from "../Plats/confirm_command_modal";
import { ConfirmDeleteCommandModal } from "../Plats/confirm_delete_command_modal";

export function Command(){
    const [command, setAppCommand] = useState([]);
    const stateofCommand = useAppSelector(state => state.command);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommand())
        console.log(stateofCommand.entities)
        
      }, []);

      const handleChange = event => {
        // Mettre à jour la valeur de cacheValue lorsque l'utilisateur entre une valeur
        const newValue = event.target.value;
        setCommand(newValue);
    
        // Enregistrement de la valeur dans localStorage
        localStorage.setItem("command", newValue);
      };


    return(
        <>
       {stateofCommand.showConfirmCommandModal ? <ConfirmCommanModal/> :null}
       {stateofCommand.showDeleteCommandModal ? <ConfirmDeleteCommandModal/> :null}
        <div className="mx-auto flex flex-col justify-center">
           
            { stateofCommand.entities.length != 0 ?
            <div className="w-screen">
            <h1 className="text-left ml-6 text-xl mb-4">Ma Commande</h1>
                <ul className="flex flex-row gap-0 w-screen overflow-y-auto">
                    {
                        stateofCommand.entities.map((singleCommand)=>(
                            <li className="">
                                <SingleCommandElementInCommand command = {singleCommand}></SingleCommandElementInCommand>
                             </li>
                        ))
                    }
                    
                </ul>
                
            </div>
            : <h3 className="w-screen text-center"></h3>}
        
        </div>
        { stateofCommand.entities.length != 0 ?
        <div className="text-center">
            <button class="bg-green-500 mx-2 px-3 py-2 my-2 rounded-2xl shadow w-48"
            onClick={
            
             ()=>{dispatch(setShowConfirmCommandModal(true))} 
            }
            >Valider ma commande</button>
            <button class="bg-red-500 mx-2 px-3 py-2 my-2 rounded-2xl shadow w-48"
            onClick={
            
             ()=>{
               // localStorage.removeItem("command")
               dispatch(setShowDeleteCommandModal(true))
             }
            }
            >Supprimer commande</button>
            </div> : null
            }
        </>
    )
}
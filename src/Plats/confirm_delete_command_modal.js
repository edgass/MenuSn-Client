import React,{useState} from 'react';
import { Button } from 'primereact/button';
import {useDispatch} from 'react-redux'
import {useAppSelector} from '../hook'
import {setShowDeleteCommandModal,getCommand } from "../store/command-store";
import { SingleCommandElementInCommand } from '../command/single_command_element_in_command';
import { SingleElementInCommande } from '../model/command_model';
import SingleElementInCommandeModel from '../model/single_element_in_command_model';
import { setCommand,command } from '../store/command-store';
import Swal from 'sweetalert2'


import { InputNumber } from 'primereact/inputnumber';
        
export function ConfirmDeleteCommandModal(props){

  const state = useAppSelector(state => state.command)

    const [quantity,setQuantity] = useState(1)

    const dispatch = useDispatch()

   function openSuccessAddToCommand(arg)
    {
     // const texte = arg.quantity+" "+arg.element.name+" ajouté à votre commande"
      Swal.fire({
        title: 'Ok',
        text: "Votre liste de commande est de nouveau vide",
        type: 'success',
        
      })
    }

    function handleChange(event) {
        console.log(event.target.value);
        setQuantity(parseInt(event.target.value ))
      }

    return(
        <div class="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="justify-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start mx-auto">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h2 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Supprimer cette commande</h2>
              <div class="flex justify-center">
              <div class="flex justify-center">
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Attention toutes les produits ajoutés à votre commande seront retirés</p>
              </div>
              
            </div>
          </div>
        </div>
      
        
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-3 sm:ml-3 sm:w-auto sm:text-sm"
           onClick={
            ()=>{dispatch(setShowDeleteCommandModal(false))}
          }>Annuler</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={
            ()=>{
             localStorage.removeItem("command")
             dispatch(setShowDeleteCommandModal(false),
             getCommand
             )
          
            }
          }
          >Confirmer</button>
         
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>

    )
}
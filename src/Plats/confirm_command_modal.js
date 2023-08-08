import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { SingleCommandElementInCommand } from '../command/single_command_element_in_command';
import { SingleElementInCommande } from '../model/command_model';
import {setShowConfirmCommandModal } from "../store/command-store";
import {postNewCommand} from '../store/command-store'
import Swal from 'sweetalert2'
import { useAppSelector } from '../hook';
import { SingleCommandElementInCommandConfirmModal } from './single_command_element_in_confirm_command_modal';
import { ProgressSpinner } from 'primereact/progressspinner';



export function ConfirmCommanModal(){

    const [quantity,setQuantity] = useState(1)
    const [totalPriceOfCommand,setTotalPriceOfCommand] = useState(0)
    const stateofCommand = useAppSelector(state=>state.command)

    const dispatch = useDispatch()

    useEffect(()=>{
      let totalPrice = 0;
     stateofCommand.entities.map(el=>{
      let sousTotal = parseInt(el.element.prix*el.quantity)
      totalPrice = totalPrice+sousTotal
     })
     setTotalPriceOfCommand(totalPrice)
        
    },[
        dispatch
    ])


   function openSuccessAddToCommand(arg)
    {
     // const texte = arg.quantity+" "+arg.element.name+" ajouté à votre commande"
      Swal.fire({
        title: 'Succés',
        text: "Ajouté avec succés",
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
        <div class="flex justify-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex items-center mx-auto">
            <div class="mt-3 sm:mt-0 sm:ml-4 text-center">
              <h2 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Ma commande</h2>
              
              <div className="w-full py-6 grid grid-cols-1">
           { stateofCommand.entities.map((cmd) => <SingleCommandElementInCommandConfirmModal singleCommand = {cmd}/>)}
        </div>
         <h2 className='font-bold'>Total : {totalPriceOfCommand} FCFA</h2>
            </div>
          </div>
        </div>
        {stateofCommand.loading === 'pending' ? <div className='px-10 py-5'><ProgressSpinner></ProgressSpinner></div> : 
          stateofCommand.loading === 'succeded' ? 
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <p className='px-4 py-3'>Votre commande a été envoyée avec succés, veuillez patienter SVP en attendant la livraison,</p>
          
          <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={
          ()=>{
            dispatch(setShowConfirmCommandModal(false))} 
        }
        >Ok Fermer</button>
          </div>   
        
         
           :

        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={
          ()=>{
            dispatch(postNewCommand())} 
        }
        >Confirmer</button>
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
         onClick={
         ()=>{
          dispatch(setShowConfirmCommandModal(false))} 
      
        }>Annuler</button>
      </div> }
        
      </div>
    </div>
  </div>
</div>

    )
}
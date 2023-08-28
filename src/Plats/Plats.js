import {React} from 'react';
import { SingleFood } from "../single_food";
import {useDispatch} from 'react-redux'
import {useAppSelector} from '../hook'
import {getAllElements} from '../store/menu-store'
import {addCatToSearch,setCatId} from '../store/menu-store'
import { useEffect,useState } from "react";
import { ConfirmAddToCommandModal } from './confirm_add_to_command_modal';
import { ProgressSpinner } from 'primereact/progressspinner';


export function Plats(){

    const state = useAppSelector(state => state.getAllElements);
    const [showConfirmAddToCommandModal, setShowConfirmAddToCommandModal] = useState(false);
    const [showConfirmCommandModal, setShowConfirmCommandModal] = useState(false);
    const [elementToAddToCommand, setElementToAddToCommand] = useState("");
    const dispatch = useDispatch();

  



    useEffect(()=>{
      //  dispatch(setCatId("CD94PbwpWd7oQU1F5e2R"))
        dispatch(getAllElements("CD94PbwpWd7oQU1F5e2R"));
    },[
        dispatch
    ])

    const showModalFunction = show => {
        setShowConfirmAddToCommandModal(show)
       };
    const showConfirmCommandModalFunction = show => {
        setShowConfirmCommandModal(show)
       };
       const setElementToAddToCommandFunction = element => {
        setElementToAddToCommand(element)
       };

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
        <>
      {showConfirmAddToCommandModal === true ? <ConfirmAddToCommandModal elementToAddToCommand= {elementToAddToCommand} onChangeShowModalState={showModalFunction}/> :null}
      {  state.loading ==='pending' ? <div className='px-10 py-5'><ProgressSpinner></ProgressSpinner></div> :
        state.entities.length === 0 ? <div className='px-10 py-5'><div><h1>Nous en manquons actuellement</h1></div></div> :
        <div className="px-10 py-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 justify-center items-center">
           { state.entities.map((plat) => (<SingleFood element={plat} onElementToAddToCommandFunction={setElementToAddToCommandFunction} onChangeShowModalState={showModalFunction}/>))}
        </div>
        }
     </>
    )

}

export default Plats;
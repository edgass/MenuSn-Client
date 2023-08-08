

export function SingleCommandElementInCommandConfirmModal(props){
   
    return(
        <div className="my-2 flex flex-row">
        {  <div style={{backgroundImage:`url(${props.singleCommand.element.imagepath})`}} className="w-12 bg-black h-12 rounded-full shadow-xl bg-center bg-cover"/>  }
        <div className='ml-2 flex flex-col items-left'>
            <p className="font-semibold text-left">{props.singleCommand.element.name}</p>
            <div className='flex flex-row justify-between space-x-12'>
                <p>Quantité : {props.singleCommand.quantity}</p>
                <p className='text-right'>{props.singleCommand.quantity*props.singleCommand.element.prix} FCFA</p>
            </div>
            
            
        </div>
        <h2></h2>
        </div>
    )
}
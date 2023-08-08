export function SingleCommandElementInCommand(props){
    return(
       
            <div className="flex flex-col items-center w-32">
                {/* <div style={{backgroundImage:`url(${props.element.image})`}} className="w-32 bg-black h-32 rounded-full -mt-16 mb-6 shadow-xl bg-center bg-cover"/>   */}
                { <div style={{backgroundImage:`url(${props.command.element.imagepath})`}} className="w-12 bg-black h-12 rounded-full shadow-xl bg-center bg-cover"/>   }
            
           {      <p className="text-center">{props.command.quantity} {props.command.element.name}</p>  }
            </div>
        
    )
}
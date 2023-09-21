import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { SingleCommandElementInCommand } from "../command/single_command_element_in_command";
import SingleElementInCommandeModel from "../model/single_element_in_command_model";
import commandService from "../services/command_service";
import menuService from "../services/menu_service";
import toast from 'react-hot-toast';


export interface CommandState{
    entities : SingleElementInCommandeModel[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
    showConfirmCommandModal : Boolean,
    showDeleteCommandModal : Boolean
    showCommandDetails : Boolean,
    totalPriceOfCommand: number

}


export const initialStateOfCommand : CommandState = {
    entities : [],
    loading : 'idle',
    showConfirmCommandModal : false,
    showDeleteCommandModal : false,
    showCommandDetails:false,
    totalPriceOfCommand : 0
}

export const postNewCommand = createAsyncThunk(
    'command/new',
    async (arg:string,{rejectWithValue})=>{
        try{
            return await commandService.postNewCommand("hjcscsd","gyzgvi",arg);
        }catch(err){
            return rejectWithValue([]);
        }
    }
);

/*  export const getCommandFromLocalStorage = createAsyncThunk(
    'command/get',
    async (arg:string,{getState,rejectWithValue})=>{    
        try{
            const storedValue = localStorage.getItem("command");

        }catch(err){
            console.log(err)
            return rejectWithValue([]);
        }
    }
);  */




export const commandSlice = createSlice({
    name: 'command',
    initialState: initialStateOfCommand,
    reducers: {
        reset: () => initialStateOfCommand,
        getCommand :(state,action)=>{
            const storedValue = localStorage.getItem("command");
            if(storedValue !== null && storedValue !== ""){
                state.entities = JSON.parse(storedValue ?? "");
                //Calcul du prix total
                state.totalPriceOfCommand = 0;
                state.entities.map(el=>{
                    let sousTotal = el.element.prix*el.quantity
                    state.totalPriceOfCommand = state.totalPriceOfCommand+sousTotal
                   })
            }else{
                state.entities = [];
            }
            
        },
        deleteCommandeItem : (state,action)=>{
            try{
                const storedValue = localStorage.getItem("command");
                state.entities = [];
                if(storedValue != null && storedValue != undefined){
                    const actualValues = JSON.parse(storedValue ?? "");
                    for(let i=0;i<actualValues.length;i++){
                        if(actualValues[i].element.name !== action.payload.element.name && actualValues[i].element.prix !== action.payload.element.prix){
                            console.log(actualValues[i].element.name)
                            state.entities = [...state.entities,actualValues[i]]
                           
                        }
                        localStorage.removeItem("command")
                        //state.entities = [...actualValues,action.payload]
                        localStorage.setItem("command",JSON.stringify(state.entities))
                    }
                }
                 //Calcul du prix total
                 state.totalPriceOfCommand = 0;
                 state.entities.map(el=>{
                    let sousTotal = el.element.prix*el.quantity
                    state.totalPriceOfCommand = state.totalPriceOfCommand+sousTotal
                   })
            }catch(e){

            }
        },
        setCommand :(state,action)=>{
         try{
       
                const storedValue = localStorage.getItem("command");
                state.entities = [];
                console.log(action.payload)
                if(storedValue == null){
                    state.entities = [action.payload]
                    localStorage.setItem("command",JSON.stringify(state.entities))
                   
                }else{

                    const actualValues = JSON.parse(storedValue ?? "");
                    const element = actualValues.find((el: { element: { name: any; prix: any; }; }) => el.element.name === action.payload.element.name && el.element.prix === action.payload.element.prix);
                    if(element !== null && element !== undefined){
                        console.log(element)
                        actualValues.map((item: SingleElementInCommandeModel)=>{
                            
                            if(item.element.name === action.payload.element.name && item.element.prix === action.payload.element.prix){
                                console.log("it exist")
                                const newQtt = item.quantity+action.payload.quantity
                                const newValueOfExistedElementInCommand = new SingleElementInCommandeModel(action.payload.element,parseInt(newQtt))
                                state.entities = [...state.entities, newValueOfExistedElementInCommand]
                               
                            }else{
                                console.log("element name : " +item.element.name+ " payload name : "+action.payload.element.name)
                            console.log("element price : " +item.element.prix+ " payload name : "+action.payload.element.prix)
                                console.log("exist but is different")
                                console.log(item)
    
                                state.entities = [...state.entities,item]
                                console.log(state.entities)
                               
    
                            }
                        })
                    }else{
                        console.log("element non existant")
                        console.log(element)

                        state.entities = [...actualValues,action.payload]
                       
                    }
                    localStorage.removeItem("command")
                    //state.entities = [...actualValues,action.payload]
                    localStorage.setItem("command",JSON.stringify(state.entities))
                     //Calcul du prix total
                     state.totalPriceOfCommand = 0;
                    state.entities.map(el=>{
                        let sousTotal = el.element.prix*el.quantity
                        state.totalPriceOfCommand = state.totalPriceOfCommand+sousTotal
                    })
                    
                 
                }
          
               toast.success("Ajouté avec succés")

            }catch(e){
                console.log(e)
                toast.error("Erreur d'ajout")
            }
           //https://react-hot-toast.com/docs => doc for this toast
         //  console.log(state.elementToSearch)
           
          //  console.log(state.elementToSearch);
        },
        setShowConfirmCommandModal(state,action){
            state.showConfirmCommandModal = action.payload;
        },
        setShowDeleteCommandModal(state,action){
            state.showDeleteCommandModal = action.payload;
        },
        setShowCommandDetails(state,action){
          
            state.showCommandDetails = action.payload;
            
        }
    },
     extraReducers : (builder) =>{
       

        builder.addCase(postNewCommand.pending,(state)=>{
            state.loading = 'pending'
        });

        
        builder.addCase(postNewCommand.rejected,(state)=>{
            state.loading = 'failed'
          //  state.errorMessage = action;
            
        });

        builder.addCase(postNewCommand.fulfilled,(state,action)=>{
            state.loading = 'succeded';
            
           
        });
    } 
})

export default commandSlice.reducer;
export const {getCommand,setCommand,setShowConfirmCommandModal,setShowDeleteCommandModal,setShowCommandDetails,deleteCommandeItem,reset} = commandSlice.actions


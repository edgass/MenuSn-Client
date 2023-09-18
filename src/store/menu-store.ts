import { AnyAction, AsyncThunkAction, createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hook";
import Element from "../model/element_model";
import menuService from "../services/menu_service";


export interface MenuState{
    entities : Element[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
    errorMessage ? : string,
    elementToSearch : string,
    showDetailsModal : boolean,
    currentElementDetails: Element | null
}

interface RootState {
    menuState: MenuState;
  }

export const initialStateOfgetAllElements : MenuState = {
    entities : [],
    loading : 'idle',
    elementToSearch : "CD94PbwpWd7oQU1F5e2R",
    showDetailsModal : false,
    currentElementDetails : null
}

export const getAllElements = createAsyncThunk(
    'elements/getAll',
    async (arg:string,{getState,rejectWithValue})=>{    
         const tt = getState()
        try{
          //  console.log(arg)  
            return await menuService.getAllElements(arg);
        }catch(err){
            console.log(err)
            return rejectWithValue([]);
        }
    }
);




export const getAllElementsSlice = createSlice({
    name: 'getAllElements',
    initialState: initialStateOfgetAllElements,
    reducers: {
        setCatId :(state,action)=>{
            console.log(action.payload)
            state.elementToSearch = action.payload
            
        },
        addCatToSearch :(state,action)=>{
            try{
                state.elementToSearch = action.payload

            }catch(e){
                console.log(e)
            }
           
         //  console.log(state.elementToSearch)
           
          //  console.log(state.elementToSearch);
        },
        setShowDetailModal:(state,action)=>{
            state.showDetailsModal = action.payload
        },
        setCurrentElementDetail:(state,action)=>{
            state.currentElementDetails = action.payload
        }
    },
    extraReducers : (builder) =>{
       

        builder.addCase(getAllElements.pending,(state)=>{
            state.loading = 'pending'
        });

        
        builder.addCase(getAllElements.rejected,(state)=>{
            state.loading = 'failed'
          //  state.errorMessage = action;
            
        });

        builder.addCase(getAllElements.fulfilled,(state,action)=>{
            state.loading = 'succeded';
            state.entities = action.payload;
        });
    }
})

export default getAllElementsSlice.reducer;
export const {addCatToSearch,setCatId,setShowDetailModal,setCurrentElementDetail} = getAllElementsSlice.actions

function dispatch(arg0: AsyncThunkAction<Element[], void, { state?: unknown; dispatch?: Dispatch<AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
    throw new Error("Function not implemented.");
}

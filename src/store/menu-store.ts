import { AnyAction, AsyncThunkAction, createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import { useAppSelector } from "../hook";
import Element from "../model/element_model";
import menuService from "../services/menu_service";


export interface MenuState{
    entities : Element[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
    errorMessage ? : string,
    elementToSearch : string
}

interface RootState {
    menuState: MenuState;
  }

export const initialStateOfgetAllElements : MenuState = {
    entities : [],
    loading : 'idle',
    elementToSearch : "CD94PbwpWd7oQU1F5e2R"
}

export const getAllElements = createAsyncThunk(
    'elements/getAll',
    async (_,{rejectWithValue,getState})=>{
        const currentState = getState() as MenuState;
        console.log(currentState.elementToSearch)
        const  menuState  = currentState;
        
        try{
          
           
   
          //  const { stateDatas } = getState() as { stateDatas: MenuState };
            
          //  console.log(stateDatas.elementToSearch)
            return await menuService.getAllElements(currentState.elementToSearch);
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
        addCatToSearch :(state,action)=>{
           state.elementToSearch = action.payload
          //  state.elementToSearch = action.payload;
            getAllElements();
            console.log(state.elementToSearch);
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
export const {addCatToSearch} = getAllElementsSlice.actions

function dispatch(arg0: AsyncThunkAction<Element[], void, { state?: unknown; dispatch?: Dispatch<AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
    throw new Error("Function not implemented.");
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Category } from "../model/category-model";
import menuService from "../services/menu_service";
import { getAllElements } from "./menu-store";


export interface CategoryState{
    entities : Category[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
    errorMessage ? : string
    currentCategory:Category | null
}

export const initialStateOfgetAllCategory : CategoryState = {
    entities : [],
    loading : 'idle',
    currentCategory:null
}

export const getAllCategory = createAsyncThunk(
    'category/getAll',
    async (_,{rejectWithValue})=>{
        try{
            return await menuService.getAllCategory();
        }catch(err){
            return rejectWithValue([]);
        }
    }
);

export const getAllCategorySlice = createSlice({
    name: 'getAllCategory',
    initialState: initialStateOfgetAllCategory,
    reducers: {
        setCurrentCategory:(state,action)=>{
            console.log(action.payload)
            state.currentCategory = action.payload;
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(getAllCategory.pending,(state,action)=>{
            state.loading = 'pending'
        });

        
        builder.addCase(getAllCategory.rejected,(state,action)=>{
            state.loading = 'failed'
          //  state.errorMessage = action;
            
        });

        builder.addCase(getAllCategory.fulfilled,(state,action)=>{
        
            state.loading = 'succeded';
            state.entities = action.payload;
            state.currentCategory = action.payload[0]     
        });

    }
})

export default getAllCategorySlice.reducer;
export const {setCurrentCategory} = getAllCategorySlice.actions
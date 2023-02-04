import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Category } from "../model/category-model";
import menuService from "../services/menu_service";


export interface CategoryState{
    entities : Category[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
    errorMessage ? : string
}

export const initialStateOfgetAllCategory : CategoryState = {
    entities : [],
    loading : 'idle'
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
        });

    }
})

export default getAllCategorySlice.reducer;
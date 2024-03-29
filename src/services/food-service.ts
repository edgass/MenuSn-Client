import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import foodService from "../services/food-service";

import { Category } from "../model/category-model";




  export interface CategoryCredentials {
    name : string;
    position : number;
  }


export interface FetchCategoryState{
    entities : Category[],
    loading : 'idle' | 'pending' | 'succeded' | 'failed',
}



export const initialStateFetchCategory : FetchCategoryState = {
    entities : [],
    loading : 'idle',
}


export const fetchCategory = createAsyncThunk(
    'food/new',
    async (credential:CategoryCredentials,{rejectWithValue})=>{
        try{
        
     //      const categorys =  await foodService.fetchCategorys();
      //  console.log(categorys)
       //     return categorys;
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




export const fetchCategorySlice = createSlice({
    name: 'fetchCategoryList',
    initialState: initialStateFetchCategory,
    reducers: {
     
    },
     extraReducers : (builder) =>{
       

        builder.addCase(fetchCategory.pending,(state)=>{
            state.loading = 'pending'
        });

        
        builder.addCase(fetchCategory.rejected,(state)=>{
            state.loading = 'failed'
          //  state.errorMessage = action;
            
        });

        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.loading = 'succeded';
          //  state.entities = action.payload
           
        });
    } 
})

export default fetchCategorySlice.reducer;


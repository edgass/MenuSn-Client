import { configureStore } from '@reduxjs/toolkit'
import  getAllCategorySlice  from './category-store';
import getAllElementsSlice from './menu-store'

export const store = configureStore({
  reducer: {
    getAllElements: getAllElementsSlice,
    getAllCategory: getAllCategorySlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware(),
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
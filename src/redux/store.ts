import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/count.slice'
import produtoReducer from './slices/produto.slice'

export const store = configureStore({
    reducer: {
        count: countReducer,
        produto: produtoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
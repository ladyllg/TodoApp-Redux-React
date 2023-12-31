import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/count.slice'
import produtoReducer from './slices/produto.slice'
import todoReducer from './slices/todo.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    count: countReducer,
    produto: produtoReducer,
    toDo: todoReducer
})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
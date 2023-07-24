import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Produto {
  id?: number;
  nome: string;
  preco: number;
  estoque: number;
  createdAt?: string;
  updatedAt?: string;
}

interface ProdutoState {
  produtos: Produto[];
}

const initialState: ProdutoState = {
  produtos: [
    {
      id: 1,
      nome: "Maça",
      preco: 1.2,
      estoque: 10,
    },
  ],
};

const produtoSlice = createSlice({
    name: "produtos",
    initialState,
    reducers: {
        addProduto: (state, action: PayloadAction<Produto>) => {
            console.log(state.produtos.length)
            state.produtos.push(action.payload)
        },
        removerProduto: (state, action: PayloadAction<number>) => {
            state.produtos = state.produtos.filter(
                (produto) => produto.id !== action.payload
            )
        }
    }
})

export const { addProduto, removerProduto } = produtoSlice.actions
export default produtoSlice.reducer
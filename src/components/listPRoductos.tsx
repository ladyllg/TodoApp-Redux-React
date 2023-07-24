import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "reactstrap";
import { RootState } from "../redux/store";

import { removerProduto } from '../redux/slices/produto.slice'

export default function ProdutosList() {
  const dispatch = useDispatch();

  const produtos = useSelector((state: RootState) => state.produto.produtos);
  
  return (
    <table className="table table-responsive table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Estoque</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto, index) => {
          return (
            <tr key={produto.id}>
              <th scope="row">{produto.id}</th>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.estoque}</td>
              <td><button className="btn btn-danger" onClick={() => dispatch(removerProduto(index))}>Remover</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
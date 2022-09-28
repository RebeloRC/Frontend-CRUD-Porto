import { ListContaier } from "./styles";

type TypeMovimentacao = {
  ListMovimentacao: any;
  setListMovimentacao: any;
  key: any;

  id: string;
  id_cliente: string;
  id_container: string;
  Tipo_movimentacao: string;
  data_hora_inicio: string
  data_hora_fim: string;
}

export default function Movimentacao(props: TypeMovimentacao) {
  return (
    <ListContaier>
      <p>{props.id}</p>
      <p>{props.id_cliente}</p>
      <p>{props.id_container}</p>
      <p>{props.Tipo_movimentacao}</p>
      <p>{props.data_hora_inicio}</p>
      <p>{props.data_hora_fim}</p>
    </ListContaier>
  )
}

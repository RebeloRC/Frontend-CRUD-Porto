import Head from 'next/head'
import axios from "axios";
import { useState } from 'react'
import { Button, Container, ContainerButton, Form, FormsContainer, Input, MovimentacoesHeader } from '../styles/pages/Home'
import Movimentacao from '../components/Movimentacao';


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
  teste: string;
}

export default function Home() {

  const [DadosCliente, setDadosCliente] = useState({
    id: "",
    Nome_cliente: "",
  })

  const [DadosMovimentacao, setDadosMovimentacao] = useState({
    id: "",
    id_cliente: "",
    id_container: "",
    Tipo_movimentacao: "",
    data_hora_inicio: "",
    data_hora_fim: "",
  })

  const [DadosContainer, setDadosContainer] = useState({
    id: "",
    id_cliente: "",
    Numero_container: "",
    Tipo_container: "",
    Status_container: "",
    Categoria_container: "",
  })

  const [ListMovimentacao, setListMovimentacao] = useState([]);

  return (
    <div>
      <Head>
        <title>CRUD porto</title>
      </Head>

      <main>
        <Container>
          <FormsContainer>
            <Form>
              <h2>Cliente</h2>
              <Input type="text" value={DadosCliente.id} onChange={(event) => setDadosCliente({ ...DadosCliente, id: event.target.value })} placeholder="Id do Cliente"></Input>
              <Input type="text" value={DadosCliente.Nome_cliente} onChange={(event) => setDadosCliente({ ...DadosCliente, Nome_cliente: event.target.value })} placeholder="Nome do cliente"></Input>
              <ContainerButton>
                <Button onClick={() => { axios.post("http://localhost:8080/cliente", DadosCliente) }}>Create</Button>
                <Button onClick={() => { axios.delete(`http://localhost:8080/cliente/${DadosCliente.id}`,) }} >Delete</Button>
                <Button onClick={() => { axios.get("http://localhost:8080/cliente").then((response) => { console.log(response.data) }) }}>Get</Button>
                <Button onClick={() => { axios.put("http://localhost:8080/cliente", DadosCliente) }} >Put</Button>
              </ContainerButton>
            </Form>
            <Form>
              <h2>Container</h2>
              <Input type="text" value={DadosContainer.id} onChange={(event) => setDadosContainer({ ...DadosContainer, id: event.target.value })} placeholder="Id do Container"></Input>
              <Input type="text" value={DadosContainer.Numero_container} onChange={(event) => setDadosContainer({ ...DadosContainer, Numero_container: event.target.value })} placeholder="Numero do Contaier"></Input>
              <Input type="text" value={DadosContainer.Tipo_container} onChange={(event) => setDadosContainer({ ...DadosContainer, Tipo_container: event.target.value })} placeholder="Tipo do Contaier"></Input>
              <Input type="text" value={DadosContainer.id_cliente} onChange={(event) => setDadosContainer({ ...DadosContainer, id_cliente: event.target.value })} placeholder="Id do cliente"></Input>
              <Input type="text" value={DadosContainer.Status_container} onChange={(event) => setDadosContainer({ ...DadosContainer, Status_container: event.target.value })} placeholder="Status do container"></Input>
              <Input type="text" value={DadosContainer.Categoria_container} onChange={(event) => setDadosContainer({ ...DadosContainer, Categoria_container: event.target.value })} placeholder="Categoria"></Input>
              <ContainerButton>
                <Button onClick={() => { axios.post("http://localhost:8080/container", DadosContainer) }}>Create</Button>
                <Button onClick={() => { axios.delete(`http://localhost:8080/container/${DadosContainer.id}`,) }}>Delete</Button>
                <Button onClick={() => { axios.get("http://localhost:8080/container").then((response) => { console.log(response.data) }) }}>Get</Button>
                <Button onClick={() => { axios.put("http://localhost:8080/container", DadosContainer) }} >Put</Button>
              </ContainerButton>
            </Form>
            <Form>
              <h2>Movimentação</h2>
              <Input type="text" value={DadosMovimentacao.id} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, id: event.target.value })} placeholder="Id da movimentação"></Input>
              <Input type="text" value={DadosMovimentacao.id_cliente} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, id_cliente: event.target.value })} placeholder="Id do cliente"></Input>
              <Input type="text" value={DadosMovimentacao.id_container} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, id_container: event.target.value })} placeholder="Id do container"></Input>
              <Input type="text" value={DadosMovimentacao.Tipo_movimentacao} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, Tipo_movimentacao: event.target.value })} placeholder="Tipo movimentacao"></Input>
              <Input type="text" value={DadosMovimentacao.data_hora_inicio} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, data_hora_inicio: event.target.value })} placeholder="Data e Hora do inicio"></Input>
              <Input type="text" value={DadosMovimentacao.data_hora_fim} onChange={(event) => setDadosMovimentacao({ ...DadosMovimentacao, data_hora_fim: event.target.value })} placeholder="Data e Hora do fim"></Input>
              <ContainerButton>
                <Button onClick={() => { axios.post("http://localhost:8080/movimentacao", DadosMovimentacao) }} >Create</Button>
                <Button onClick={() => { axios.delete(`http://localhost:8080/movimentacao/${DadosMovimentacao.id}`,) }} >Delete</Button>
                <Button onClick={() => { axios.get("http://localhost:8080/movimentacao").then((response) => { setListMovimentacao(response.data) }) }}>Get</Button>
              </ContainerButton>
            </Form>
          </FormsContainer>
          <MovimentacoesHeader>
            <h3>Id_movimentação</h3>
            <h3>Id_cliente</h3>
            <h3>Id_container</h3>
            <h3>Tipo_movimentação</h3>
            <h3>Data_hora_inicio</h3>
            <h3>Data_hora_fim</h3>
          </MovimentacoesHeader>
          {ListMovimentacao.map((value: TypeMovimentacao) => (
            <Movimentacao
              ListMovimentacao={ListMovimentacao}
              setListMovimentacao={setListMovimentacao}
              key={value.id}

              id={value.id}
              id_cliente={value.id_cliente}
              id_container={value.id_container}
              Tipo_movimentacao={value.Tipo_movimentacao}
              data_hora_inicio={value.data_hora_inicio}
              data_hora_fim={value.data_hora_fim} />
          ))}
        </Container>
      </main>
    </div>
  )
}

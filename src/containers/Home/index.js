import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/img-front.png";
import Arrow from "../../assets/arrow.png";
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItens";
import NewButton from "../../components/Button";

import { Container, Image, InputLabel, Input, ArrowImg } from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("https://criando-usuarios-node.vercel.app/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([newUser, ...users]);

    navigate("./usuarios");
  }

  return (
    <Container>
      <Image src={People} alt="logo-imagem" />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="text" placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade"></Input>

        <NewButton onClick={addNewUser}>
          Cadastrar
          <ArrowImg src={Arrow} alt="seta" />
        </NewButton>
      </ContainerItems>
    </Container>
  );
};

export default App;

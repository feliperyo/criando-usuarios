import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/img-front.png";
import Arrow from "../../assets/arrow.png";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  ArrowImg,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
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

        <Button onClick={addNewUser}>
          Cadastrar
          <ArrowImg src={Arrow} alt="seta" />
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default App;

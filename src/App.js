import React, { useState, useRef } from "react";
import People from "./assets/img-front.png";
import Arrow from "./assets/arrow.png";
import Trash from "./assets/trash.png";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  ArrowImg,
  User,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
      ...users,
    ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
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

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age} Anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="deletar" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;

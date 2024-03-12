import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Avatar from "../../assets/img-back.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  ArrowImg,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: createdUsers } = await axios.get(
        "http://localhost:3001/users"
      );
      setUsers(createdUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-imagem" />

      <ContainerItems>
        <H1>Usuários</H1>

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

        <Button onClick={goBackPage}>
          <ArrowImg src={Arrow} alt="seta" />
          Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;

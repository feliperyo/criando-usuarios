import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Avatar from "../../assets/img-back.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItens";
import NewButton from "../../components/Button";

import { Container, Image, ArrowImg, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: createdUsers } = await axios.get(
        "https://users-api-291026213282.herokuapp.com/users"
      );
      setUsers(createdUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`https://users-api-291026213282.herokuapp.com/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-imagem" />

      <ContainerItems isBlur={true}>
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

        <NewButton isTransparent={true} onClick={goBackPage}>
          <ArrowImg src={Arrow} alt="seta" />
          Voltar
        </NewButton>
      </ContainerItems>
    </Container>
  );
};

export default Users;

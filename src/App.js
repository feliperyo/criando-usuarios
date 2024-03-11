import React from "react";
import People from "./assets/img-front.png";
import Arrow from "./assets/arrow.png";

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
  return (
    <Container>
      <Image src={People} alt="logo-imagem" />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input type="text" placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input type="number" placeholder="Idade"></Input>

        <Button>
          Cadastrar
          <ArrowImg src={Arrow} alt="seta" />
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>404 - Página não encontrada</p>
        <Link to="/"> Ir para página inicial</Link>
      </Content>
    </Container>
  );
};

export default NotFoundPage;

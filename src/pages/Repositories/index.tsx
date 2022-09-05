import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ModalList, RepositoriesList, Title } from "./styles";

export const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState<any>([]);

  useEffect(() => {
    let nameRepositories = localStorage.getItem("nameRepositories");
    if (nameRepositories !== null) {
      nameRepositories = JSON.parse(nameRepositories);
      setRepositories(nameRepositories);
      localStorage.clear();
    } else {
      // console.log("voltou");
      navigate("/");
    }
  }, []);
  return (
    <Container>
      <Title>Repositórios:</Title>
      <ModalList>
        <RepositoriesList>
          {repositories.map((repository: string) => {
            return <RepositoriesList>{repository}</RepositoriesList>;
          })}
        </RepositoriesList>
      </ModalList>
    </Container>
  );
};

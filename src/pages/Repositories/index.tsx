import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LinktoHome,
  ModalList,
  RepositoriesList,
  Title,
} from "./styles";

export const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState<any>([]);
  const urlTest = "https://www.google.com";

  useEffect(() => {
    let nameRepositories = localStorage.getItem("nameRepositories");

    if (nameRepositories !== null) {
      nameRepositories = JSON.parse(nameRepositories);
      setRepositories(nameRepositories);
      localStorage.clear();
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Container>
      <Title>Repositórios:</Title>
      <ModalList>
        <RepositoriesList>
          {repositories.map((repository: string) => {
            return (
              <RepositoriesList
                onClick={() => window.open(urlTest, "_blank")?.focus}
              >
                {repository}
              </RepositoriesList>
            );
          })}
        </RepositoriesList>
      </ModalList>

      <LinktoHome to="/">Voltar</LinktoHome>
    </Container>
  );
};

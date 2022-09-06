import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import {
  Container,
  MsgError,
  SearchBtn,
  SearchGroup,
  SearchProfileGitHub,
  Title,
} from "./styles";

export const Home = () => {
  const [user, setUser] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  console.log(user);
  const navigate = useNavigate();

  function searchHandle() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        const nameRepositories: string[] = [];
        repositories.map((repository: { name: string }) =>
          nameRepositories.push(repository.name)
        );
        localStorage.setItem(
          "nameRepositories",
          JSON.stringify(nameRepositories)
        );
        setError(false);
        navigate("/repositories");
        console.log(nameRepositories);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((error: Error) => {
        setError(true);
      });
  }

  return (
    <Container>
      <Title>Lista de Reposiórios:</Title>
      <SearchGroup>
        <SearchProfileGitHub
          maxLength={64}
          onKeyPress={(ev) => {
            if (ev.key === "Enter" || ev.key === "OK") {
              ev.preventDefault();
              searchHandle();
            }
          }}
          placeholder="Digite o usuário do Github"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <SearchBtn type="button" onClick={() => searchHandle()}>
          Pesquisar
        </SearchBtn>
      </SearchGroup>
      {error && <MsgError>Usuário não encontrado</MsgError>}
      <Footer />
    </Container>
  );
};

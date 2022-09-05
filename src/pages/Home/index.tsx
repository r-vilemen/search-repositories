import React, { useState } from "react";
// import axios from "axios";
import {
  Container,
  SearchBtn,
  SearchGroup,
  SearchProfileGitHub,
  Title,
} from "./styles";
// import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState<string>("");
  // const [error, setError] = useState<boolean>(false);
  // console.log(user);
  // const navigate = useNavigate();

  //  const HandleSearch = () => {
  //     axios.get(`https://api.github.com/users/${user}/repos`);
  //     .then((response: { data: any; }) => {
  //       const repositories = response.data;
  //       const nameRepositories: string[] = [];
  //       repositories.map((repository: { name: string; }) =>
  //       nameRepositories.push(repository.name)
  //       );
  //       localStorage.setItem(
  //         'nameRepositories',
  //         JSON.stringify(nameRepositories)
  //       );
  //       setError(false);
  //       navigate('/repositories')
  //   })
  //   .catch((error) => {
  //     setError(true);
  //   })

  return (
    <Container>
      <Title>Lista de Reposiórios:</Title>
      <SearchGroup>
        <SearchProfileGitHub
          placeholder="Digite o usuário do Github"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <SearchBtn>Procurar</SearchBtn>
      </SearchGroup>
    </Container>
  );
};

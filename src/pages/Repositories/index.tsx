import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LinktoHome,
  ModalList,
  RepositoriesList,
  SearchInput,
  Title,
} from "./styles";

export const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const urlTest = "https://github.com/";

  useEffect(() => {
    let nameRepositories = localStorage.getItem("nameRepositories");

    if (nameRepositories !== null) {
      nameRepositories = JSON.parse(nameRepositories);
      setRepositories(nameRepositories);
    } else {
      navigate("/");
      localStorage.clear();
    }
  }, []);
  return (
    <Container>
      <Title>Repositórios:</Title>
      <SearchInput
        type="text"
        placeholder="Repositório"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ModalList>
        <RepositoriesList>
          {repositories
            // eslint-disable-next-line array-callback-return, consistent-return
            .filter((val: string) => {
              if (search === "") {
                return val;
              }
              if (val.toLowerCase().includes(search.toLowerCase())) {
                return val;
              }
            })
            .map((repository: string) => {
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

      <LinktoHome onClick={() => localStorage.clear()} to="/">
        Voltar
      </LinktoHome>
    </Container>
  );
};

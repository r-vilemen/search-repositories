import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #282a36;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #ffff;
  -webkit-user-select: none;
  user-select: none;
`;

export const ModalList = styled.div`
  width: 80vw;
  height: 70%;
  margin-top: 1rem;
  background-color: transparent;
  border: 2px solid #ff7043;
  overflow-y: scroll;
`;

export const RepositoriesList = styled.li`
  color: #ff7043;
  list-style: none;
  text-align: center;
  margin-top: 1rem;
`;

export const LinktoHome = styled(Link)`
  width: 5rem;
  background: linear-gradient(
    178.8deg,
    #ff7043 47.41%,
    #cc5935 65.18%,
    #994227 90.84%
  );
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 4s;
`;

export const SearchInput = styled.input`
  width: 9rem;
  height: 2rem;
  background-color: transparent;
  border: 2px solid #ff7043;
  border-radius: 6px;
  align-self: flex-end;
  margin-right: 10vw;
  padding: 0 0.5rem;
  color: #ffff;
  ::placeholder {
    color: #ff7043;
  }
`;

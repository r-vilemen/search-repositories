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
  width: 70vw;
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

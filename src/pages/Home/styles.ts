import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #282a36;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #ffff;
  padding: 0 1rem;
`;

export const SearchGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

export const SearchProfileGitHub = styled.input`
  width: 12rem;
  height: 2rem;
  color: #ffff;
  padding-left: 0.5rem;
  border: 2px solid #ff7043;
  border-radius: 6px;
  background-color: transparent;
  margin-right: 1rem;
  ::placeholder {
    color: #ff7043;
  }
`;

export const SearchBtn = styled.button`
  width: 5rem;
  height: 2rem;
  color: #ffff;
  background-color: #ff7043;
  border-radius: 6px;
  border: 1px solid #ff7043;
  :hover {
    background-color: #ff8942;
  }
`;

export const MsgError = styled.div`
  font-size: 1rem;
  color: red;
  margin-top: 0.5rem;
`;

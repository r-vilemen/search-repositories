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
  align-items: flex-start;
  flex-direction: row;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  position: relative;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  margin-right: 1rem;
`;

export const SearchProfileGitHub = styled.input`
  width: 12rem;
  height: 2rem;
  color: #ffff;
  padding-left: 0.5rem;
  border: 2px solid #ff7043;
  border-radius: 6px;
  background-color: transparent;
  ::placeholder {
    color: #ff7043;
  }
  &:focus {
    outline: none;
    border-color: #ff8942;
  }
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #212529;
  border: 2px solid #ff7043;
  border-top: none;
  border-radius: 0 0 6px 6px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #292e32;
  }
`;

export const SuggestionAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const SuggestionName = styled.span`
  color: #ffff;
  font-size: 0.9rem;
`;

export const SearchBtn = styled.button`
  width: 5rem;
  height: 2rem;
  color: #ffff;
  background-color: #ff7043;
  border-radius: 6px;
  border: 1px solid #ff7043;
  cursor: pointer;
  transition:
    background-color 0.2s,
    opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: #ff8942;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  font-size: 1rem;
  color: red;
  margin-top: 0.5rem;
`;

import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.title};
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
  color: ${({ theme }) => theme.text.default};
  padding-left: 0.5rem;
  border: 2px solid #ff7043;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.card};
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
  background-color: ${({ theme }) => theme.colors.card};
  border: 2px solid #ff7043;
  border-top: none;
  border-radius: 0 0 6px 6px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

export const SuggestionItem = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s, outline 0.2s;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.shapeSecondary : "inherit"};
  outline: ${({ selected }) => (selected ? "2px solid #FF7043" : "none")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.shapeSecondary};
  }
`;

export const SuggestionAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const SuggestionName = styled.span`
  color: ${({ theme }) => theme.text.default};
  font-size: 0.9rem;
`;

export const SearchBtn = styled.button`
  width: 5rem;
  height: 2rem;
  color: #fff;
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
  color: ${({ theme }) => theme.colors.alert};
  margin-top: 0.5rem;
`;

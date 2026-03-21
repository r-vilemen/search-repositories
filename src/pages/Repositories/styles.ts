import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.title};
  -webkit-user-select: none;
  user-select: none;
`;

export const ModalList = styled.div`
  width: 90vw;
  max-width: 800px;
  margin-top: 1rem;
  background-color: transparent;
  border: 2px solid #ff7043;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 60vh;
  padding: 1rem;
`;

export const RepositoryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.shapeSecondary};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.card};
    border-color: #ff7043;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CardTitle = styled.h3`
  color: #ff7043;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const CardLanguage = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.input};
  font-size: 0.85rem;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  margin-top: 0.75rem;
  line-height: 1.4;
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
  margin-top: 1.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  border: 2px solid #ff7043;
  border-radius: 6px;
  margin-top: 1rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.text.default};
  font-size: 0.9rem;

  ::placeholder {
    color: #ff7043;
  }

  &:focus {
    outline: none;
    border-color: #ff8942;
  }
`;

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
`;

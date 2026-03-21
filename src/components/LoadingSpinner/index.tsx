import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #ff7043;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282a36;
  gap: 1rem;
`;

export const LoadingText = styled.p`
  color: #fff;
  font-size: 1rem;
`;

export function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Carregando...</LoadingText>
    </LoadingContainer>
  );
}

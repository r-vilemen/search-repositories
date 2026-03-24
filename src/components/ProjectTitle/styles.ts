import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 112, 67, 0.5),
                 0 0 20px rgba(255, 112, 67, 0.3),
                 0 0 30px rgba(255, 112, 67, 0.1);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 112, 67, 0.8),
                 0 0 40px rgba(255, 112, 67, 0.5),
                 0 0 60px rgba(255, 112, 67, 0.3);
  }
`;

export const ProjectTitleWrapper = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text.accent};
  /* margin-top: -8rem; */
  /* margin-bottom: 0.25rem; */
  margin-bottom: 10rem;
  margin-top: -15rem;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  max-width: fit-content;
  white-space: nowrap;
  animation: 
    ${typing} 2.5s steps(18) forwards,
    ${glow} 2s ease-in-out infinite;
  
  &::after {
    content: '|';
    animation: ${blink} 0.75s step-end infinite;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-top: -6rem;
  }
`;

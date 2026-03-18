import { Container, CopyrightText, LinkToLinkedin } from "./styles";

export const Footer = () => {
  const LinkedinURL = "https://linkedin.com/in/rodrigo-vilemen/";

  return (
    <Container>
      <CopyrightText>Desenvolvido por:</CopyrightText>
      <LinkToLinkedin onClick={() => window.open(LinkedinURL, "_blank")}>
        Rodrigo Vilemen
      </LinkToLinkedin>
    </Container>
  );
};

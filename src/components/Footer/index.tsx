import React from "react";
import { Container, CopyrightText, LinkToLinkedin } from "./styles";

export const Footer = () => {
  // const currentYear = new Date();
  // const year = currentYear.getFullYear();
  const LinkedinURL = "https://linkedin.com/in/rodrigo-vilemen/";

  return (
    <Container>
      {/* <CopyrightText>
        {`Copyrigth © ${year} - Rodrigo Vilemen - Todos os direitos reservados.`}
      </CopyrightText> */}
      <CopyrightText>Desenvolvido por:</CopyrightText>
      <LinkToLinkedin onClick={() => window.open(LinkedinURL, "_blank")}>
        Rodrigo Vilemen
      </LinkToLinkedin>
    </Container>
  );
};

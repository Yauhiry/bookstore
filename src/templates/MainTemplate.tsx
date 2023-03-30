import { Footer, Nav } from "components";
import { Outlet } from "react-router-dom";
import { Container, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Container>
        <Nav />
        <Outlet />
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};

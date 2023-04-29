import { Footer, Nav } from "components";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Container, StyledMainTemplate } from "./styles";
import { selectTheme, setTheme, setUserAuth, useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const MainTemplate = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserAuth(user));
      }
    });
  }, [dispatch]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(nextTheme));
  };

  return (
    <StyledMainTemplate>
      <Container>
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </Container>
      <ScrollRestoration />
    </StyledMainTemplate>
  );
};

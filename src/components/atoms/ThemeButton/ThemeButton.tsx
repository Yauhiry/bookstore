import { StyledMoonIcon, StyledSunIcon, StyledThemeButton } from "./styles";

interface ThemeButtonProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeButton = ({ theme, toggleTheme }: ThemeButtonProps) => {
  return (
    <StyledThemeButton onClick={toggleTheme}>
      {theme === "light" ? <StyledMoonIcon /> : <StyledSunIcon />}
    </StyledThemeButton>
  );
};

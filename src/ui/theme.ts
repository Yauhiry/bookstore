import { css } from "styled-components";

export const themeColors = css`
  html[theme="light"] {
    --dark: #313037;
    --primary: #f4eefd;
    --secondary: #a8a8a8;
    --medium: #5b5a62;
    --white: #ffffff;
    --gray: #e7e7e7;
    --light: #e5e5e5;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
    --opacity: #31303780;
  }

  html[theme="dark"] {
    --dark: #ffffff;
    --primary: #5b5a62;
    --secondary: #a8a8a8;
    --medium: #d7e4fd;
    --white: #313037;
    --gray: #5b5a62;
    --light: #a8a8a8;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
    --opacity: #ffffff60;
  }
`;

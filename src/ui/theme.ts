import { css } from "styled-components";

export const themeColors = css`
  html[theme="light"] {
    --dark: #313037;
    --primary: #f4eefd;
    --secondary: #a8a8a8;
    --white: #ffffff;
    --gray: #e7e7e7;
    --light: #f7f7f7;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
  }

  html[theme="dark"] {
    --dark: #ffffff;
    --primary: #5b5a62;
    --secondary: #a8a8a8;
    --white: #313037;
    --gray: #e7e7e7;
    --light: #f7f7f7;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
  }
`;

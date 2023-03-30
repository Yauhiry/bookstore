import { css } from "styled-components";
import { COLOR } from "./colors";

const H1 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: ${COLOR.DARK};
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  color: ${COLOR.DARK};
`;

const H3 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${COLOR.DARK};
`;

const S1 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.WHITE};
`;

const B1 = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${COLOR.DARK};
`;

const B2 = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLOR.SECONDARY};
`;

export const TYPOGRAPHY = {
  H1,
  H2,
  H3,
  S1,
  B1,
  B2,
};

import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid ${COLOR.GRAY};
  ${MEDIA.XL} {
    grid-template-columns: 248px 1fr 248px;
    grid-gap: 40px;
  }
`;

const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-self: right;
  grid-gap: 30px;
  padding: 16px;
  ${MEDIA.SM} {
    grid-gap: 40px;
  }
  ${MEDIA.XL} {
    grid-template-columns: repeat(4, auto);
  }
`;

export { StyledNav, LinkGroup };

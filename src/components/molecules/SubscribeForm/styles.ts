import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledSubscribeForm = styled.form`
  display: grid;
  grid-gap: 24px 0;
  padding: 24px;
  background: ${COLOR.PRIMARY};
  ${MEDIA.MD} {
    align-items: start;
    grid-template-columns: 1fr 160px;
    grid-template-rows: auto auto;
    padding: 40px;
  }
  ${MEDIA.XL} {
    padding: 64px;
  }
`;

const Text = styled.div`
  ${MEDIA.MD} {
    grid-area: 1/1/1/3;
  }
`;

const Title = styled.h3`
  ${TYPOGRAPHY.H2}
`;

const Description = styled.p`
  ${TYPOGRAPHY.B2}
`;

export { StyledSubscribeForm, Text, Title, Description };

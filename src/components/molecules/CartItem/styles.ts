import { CrossIcon, MinusIcon, PlusIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledCartItem = styled.div`
  position: relative;
  display: grid;
  padding-bottom: 36px;
  border-bottom: 1px solid ${COLOR.GRAY};
  ${MEDIA.SM} {
    grid-template-columns: minmax(148px, 208px) minmax(285px, 1fr);
    padding-bottom: 48px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 254px;
  object-fit: contain;
  background: ${COLOR.BLUE};
  ${MEDIA.SM} {
    height: 156px;
  }
`;

const Info = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  ${MEDIA.SM} {
    padding: 0 32px;
  }
  ${MEDIA.XL} {
    grid-template-columns: 1fr 40%;
  }
`;

const StyledLink = styled(Link)`
  display: -webkit-box;
  ${TYPOGRAPHY.H3}
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${MEDIA.XL} {
    -webkit-line-clamp: 1;
  }
`;

const Title = styled.div`
  justify-self: start;
  grid-area: 1/1/2/3;
  height: 84px;
  padding-top: 20px;
  ${MEDIA.SM} {
    padding: 16px 26px 0 0;
  }
  ${MEDIA.XL} {
    grid-area: 1/1/2/2;
    height: auto;
  }
`;

const Subtitle = styled.span`
  display: -webkit-box;
  grid-area: 2/1/3/3;
  ${TYPOGRAPHY.B2}
  height: 54px;
  padding-top: 8px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${MEDIA.XL} {
    grid-area: 2/1/3/2;
  }
`;

const Counter = styled.div`
  grid-area: 3/1/4/2;
  display: grid;
  grid-template-columns: repeat(3, 56px);
  place-items: center;
`;

const CounterMinusButton = styled.button<{ $isDisabled: boolean }>`
  display: flex;
  padding: 16px;
  background: none;
  pointer-events: ${({ $isDisabled }) => $isDisabled && "none"};
`;

const CounterPlusButton = styled.button`
  display: flex;
  padding: 16px;
  background: none;
`;

const StyledMinusIcon = styled(MinusIcon)<{ $isDisabled: boolean }>`
  rect {
    fill: ${({ $isDisabled }) => ($isDisabled ? `${COLOR.SECONDARY}` : `${COLOR.DARK}`)};
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

const Amount = styled.span`
  ${TYPOGRAPHY.H3}
`;

const Price = styled.span`
  grid-area: 3/2/4/3;
  justify-self: end;
  padding-top: 16px;
  ${TYPOGRAPHY.H3}
  ${MEDIA.SM} {
    padding-top: 0;
  }
  ${MEDIA.MD} {
    ${TYPOGRAPHY.H2}
  }
  ${MEDIA.XL} {
    grid-area: 1/2/4/3;
    justify-self: center;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 16px;
  background: ${COLOR.DARK};
  ${MEDIA.SM} {
    background: none;
  }
  ${MEDIA.XL} {
    top: 24%;
  }
`;

const StyledCrossIcon = styled(CrossIcon)`
  path {
    fill: ${COLOR.WHITE};
  }
  ${MEDIA.SM} {
    path {
      fill: ${COLOR.DARK};
    }
  }
`;

export {
  StyledCartItem,
  Image,
  Info,
  StyledLink,
  Title,
  Subtitle,
  Price,
  Counter,
  StyledMinusIcon,
  StyledPlusIcon,
  Amount,
  RemoveButton,
  StyledCrossIcon,
  CounterMinusButton,
  CounterPlusButton,
};

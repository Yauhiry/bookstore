import { DetailName, DetailValue, StyledDetailItem } from "./styles";

interface DetailiItemProps {
  name: string;
  value: string;
}

export const DetailItem = ({ name, value }: DetailiItemProps) => {
  return (
    <StyledDetailItem>
      <DetailName>{name}</DetailName>
      <DetailValue>{value}</DetailValue>
    </StyledDetailItem>
  );
};

import { BackButton, PageTitle } from 'components';

import { StyledHeader } from './styles';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <BackButton />
      <PageTitle title={title} />
    </StyledHeader>
  );
};

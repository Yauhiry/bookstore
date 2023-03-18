import { accountIcon, cartIcon, favoritesIcon, logoImg } from 'assets';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../router/routes';
import { Icon, Input, LinkGroup, Logo, StyledNav } from './styles';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <Logo src={logoImg} />
      </Link>
      <Input placeholder="Search" />
      <LinkGroup>
        <Link to={ROUTE.FAVORITES}>
          <Icon src={favoritesIcon} />
        </Link>
        <Link to={ROUTE.CART}>
          <Icon src={cartIcon} />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <Icon src={accountIcon} />
        </Link>
      </LinkGroup>
    </StyledNav>
  );
};

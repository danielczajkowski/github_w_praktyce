import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { usePageType } from 'hooks/usePageType';
import logoIcon from 'assets/icons/logo.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import articleIcon from 'assets/icons/bulb.svg';
import noteIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15.3rem;
  background-color: ${({ $activeColor, theme }) =>
    $activeColor ? theme.color[$activeColor] : theme.color.notes};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
`;

const LogoWrapper = styled(NavLink)`
  display: block;
  cursor: pointer;
  width: 6.7rem;
  height: 6.7rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavWrapper = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2rem;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10vh;
`;

const Sidebar = () => {
  const pageType = usePageType();

  return (
    <SidebarWrapper $activeColor={pageType}>
      <HeaderWrapper>
        <LogoWrapper to="/">
          <img src={logoIcon} alt="Logo" />
        </LogoWrapper>
        <NavWrapper>
          <NavList>
            <NavItem>
              <ButtonIcon as={NavLink} to="/" $icon={noteIcon} $active={pageType === 'notes'} />
            </NavItem>
            <NavItem>
              <ButtonIcon
                as={NavLink}
                to="/twitters"
                $icon={twitterIcon}
                $active={pageType === 'twitters'}
              />
            </NavItem>
            <NavItem>
              <ButtonIcon
                as={NavLink}
                to="/articles"
                $icon={articleIcon}
                $active={pageType === 'articles'}
              />
            </NavItem>
          </NavList>
        </NavWrapper>
      </HeaderWrapper>
      <ButtonIcon as={NavLink} to="/logout" $icon={logoutIcon} />
    </SidebarWrapper>
  );
};

export default Sidebar;

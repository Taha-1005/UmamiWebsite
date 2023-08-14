import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { umamiImage } from './Images';
// import avenir_font from './../../assets/Fonts/AvenirLTStd-Black.otf';

type MyTuple = [string, string];
interface HeaderProps {
  menuItems?: MyTuple[];
}

function Header({
  menuItems = [
    ['BRANDS', '/brands'],
    ['ABOUT US', '/about-us'],
    ['CONTACT', '/contact'],
  ],
}: HeaderProps) {
  const HeaderContainer = styled.div`
    font-family: 'Avenir';
    color: white;
    display: flex;
    width: 100%;
    padding-top: 90px;
  `;
  const UmamiContainer = styled.div`
    margin-left: 135px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 7px;
    }
  `;
  const MenuContainer = styled.div`
    margin-right: 80px;
    width: 100%;
  `;
  const Menu = styled.nav`
    display: flex;
    justify-content: right;
    color: #8f8f92;
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 13px;
    ul {
      list-style: none;
      display: flex;
      gap: 5rem;
    }

    li {
      cursor: pointer;
      &:hover {
        color: #46422e;
      }
    }

    a {
      color: inherit;
      &:hover {
        color: inherit;
      }
      &.active {
        color: #46422e;
      }
    }
  `;
  return (
    <HeaderContainer>
      <UmamiContainer>
        <NavLink to='/'>
          <img src={umamiImage} />
        </NavLink>
      </UmamiContainer>
      <MenuContainer>
        <Menu>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item[1]}>{item[0]}</NavLink>
              </li>
            ))}
          </ul>
        </Menu>
      </MenuContainer>
    </HeaderContainer>
  );
}
export default Header;

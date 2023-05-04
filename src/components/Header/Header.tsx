import { useState } from 'react';
import { HeaderContainer, NavContainer, NavigationLink, LinkNav, MenuBurger } from "./Header.style";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDimension } from "../../utils/hooks/useDimension";

export default function Header() {
  const [ toggle, setToggle ] = useState(false);
  const dimension = useDimension();

  return (
    <HeaderContainer>
      <h1><LinkNav to="/">Code Generator</LinkNav></h1>
      <NavContainer className={toggle ? 'active' : 'inactive'} sizenav={dimension}>
        <NavigationLink to="/">QR Code</NavigationLink>
        <NavigationLink to="/barcode">Code Barre</NavigationLink>
      </NavContainer>
      {dimension < 430 && (<MenuBurger onClick={() => setToggle(!toggle)}><GiHamburgerMenu /></MenuBurger>)}
      
    </HeaderContainer>
  )
}

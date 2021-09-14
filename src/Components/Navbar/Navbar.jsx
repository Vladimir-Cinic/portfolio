import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Logo from './Logo/Logo';
import {
  Nav,
  NavCenter,
  LogoContainer,
  LinksContainer,
  Ul,
  Li,
  SLink,
  HamburgerMenu,
  Bar,
} from './NavbarElements';

const sections = [
  {
    id: 1,
    path: 'about',
    name: 'About',
  },
  {
    id: 2,
    path: 'projects',
    name: 'Projects',
  },
  {
    id: 3,
    path: 'contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleLogoClick = () => {
    scroll.scrollToTop();
    setToggleSidebar(false);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setToggleSidebar(false);
    }, 700);
  };
  return (
    <Nav>
      <NavCenter>
        <LogoContainer onClick={handleLogoClick}>
          <Logo />
        </LogoContainer>
        <HamburgerMenu onClick={() => setToggleSidebar(!toggleSidebar)}>
          <Bar active={toggleSidebar} />
        </HamburgerMenu>
        <LinksContainer active={toggleSidebar}>
          <Ul>
            {sections.map((section) => (
              <Li key={section.id}>
                <SLink
                  className='link'
                  onClick={handleLinkClick}
                  to={section.path}
                  smooth
                  duration={300}
                  activeClass='active'
                  spy={true}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {section.name}
                </SLink>
              </Li>
            ))}
          </Ul>
        </LinksContainer>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;

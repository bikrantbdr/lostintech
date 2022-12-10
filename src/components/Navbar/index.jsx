import React, {useState,useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo,MobileIcon, NavItem, NavLinks, NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
        setScrollNav(true)
        } else {
        setScrollNav(false)
        }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    LIT
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="techkey" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>TechKey</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="events" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Events</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="timeline" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Timeline</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sponsor" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Sponsor</NavLinks>
                    </NavItem>
                </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/'>Contact</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
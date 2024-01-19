import React from "react";
import { HeaderWrapper, Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <HeaderWrapper>
      <div className="Container" style={{padding: 0}}>
        <Nav>
          <Logo to="/">
            <img
              src="/logo.png"
              alt="logo"
            />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects">
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about">
              About
            </NavLink>
            <NavLink className="menu-item" to="stack">
              Stack
            </NavLink>
            <NavLink className="menu-item" to="experience">
              Experience
            </NavLink>
            <NavLink className="menu-item" to="contact">
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a
              className="btn PrimaryBtn"
              href="https://blog.naver.com/rlaxotn2300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </NavBtn>
          <Bars onClick={toggle} />
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

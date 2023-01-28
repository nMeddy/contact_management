import React from "react";
import styled from "styled-components";
import Logo from "../../assets/MokiliEvent.png";
import { Link, Outlet } from "react-router-dom";
import { StyledLink } from "../../Styles/Customers";
import colors from "../../Styles/Colors";

const HeaderContainer = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colors.primary};
`;
const LogoContactManager = styled.img`
  max-width: 180px;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <LogoContactManager src={Logo} />
        </Link>

        <div>
          <StyledLink to="/">Acceuil</StyledLink>
          <StyledLink to="/Profils">Profils des contacts</StyledLink>
          <StyledLink to="/About">A propos</StyledLink>
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Header;

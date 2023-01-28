import React from "react";
import styled from "styled-components";
import Logo from "../assets/MokiliEvent.png";
import { Link } from "react-router-dom";
import colors from "../Styles/Colors";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  font-weight: light;
  font-family: roboto;
  font-size: 20px;
`;
const TopTextHome = styled.h1`
  text-align: center;
  font-weight: lighter;
`;
const LogoContact_Manager = styled.img`
  max-width: 600px;
  margin: -100px;
`;
const HomepageButton = styled.button`
  padding:20px;
  width:220px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 5rem;
  border:none;
  margin-top: -60px;
`;
const LinkHomePage = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;

function Home() {
  return (
    <HomeContainer>
      <TopTextHome>Bienvenue à l'agence évènementielle</TopTextHome>
      <LogoContact_Manager src={Logo} />
      <HomepageButton>
        <LinkHomePage to="/Profils">Découvrir</LinkHomePage>
      </HomepageButton>
    </HomeContainer>
  );
}

export default Home;

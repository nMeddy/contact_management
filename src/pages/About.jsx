import React from "react";
import styled from "styled-components";
import Logo from "../assets/MokiliEvent.png"

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
`;
const AboutImage = styled.img`
  margin-top:-50px;
  max-width: 700px;
`;
const AboutTitle = styled.h1`
  font-weight: 300;
`;

function About() {
  return <AboutContainer>
    <AboutTitle>A propos de nous.</AboutTitle>
    <AboutImage src={Logo}/>
  </AboutContainer>;
}

export default About;

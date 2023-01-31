import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../Styles/Colors";
import DefaultPicture from "../../assets/profile.png";

const CardWrapper = styled.div`
  font-family: lato;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 25px;
  padding: 15px;
  font-family: roboto;
  font-weight: 400;
`;
const CardImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
const CardTitle = styled.span`
  color: black;
  font-size: 18px;
  font-weight: normal;
  align-self: center;
  font-family: roboto;
  font-weight: lighter;
`;

function Card({ name, email, picture, adress, phone }) {
  return (
    <CardWrapper>
      <CardLabel>{name}</CardLabel>
      <CardTitle>{email}</CardTitle>
      <CardImg src={picture} alt="profilsIMG" />
      <CardTitle>{adress}</CardTitle>
      <CardTitle>{phone}</CardTitle>
    </CardWrapper>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
Card.defaultProps = {
  name: ``,
  email: ``,
  picture: DefaultPicture,
  adress: ``,
  phone: ``,
};

export default Card;

import React from "react";
import styled from "styled-components";
import ErrorPageImage from "../assets/ErrorPage.jpeg";
import colors from "../Styles/Colors";
import { Loader } from "../Styles/Customers";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
`;
const ErrorImage = styled.img`
  max-width: 500px;
`;
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.primary};
`;

function Error() {
  return (
    <ErrorContainer>
      <Loader />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
      <ErrorImage src={ErrorPageImage} />
      
    </ErrorContainer>
  );
}

export default Error;

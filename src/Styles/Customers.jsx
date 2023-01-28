import { Link } from "react-router-dom";
import colors from "./Colors";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export const StyledLink = styled(Link)`
  margin-right: 15px;
  padding: 10px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  font-weight: lighter;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius : 5rem;
  }
`;

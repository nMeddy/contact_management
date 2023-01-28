import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../Styles/Colors";
import { Loader } from "../Styles/Customers";
import Card from "../components/Card/Card";
import DefaultPicture from "../assets/MokiliEvent.png";

const ProfilsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  font-weight: lighter;
  font-family: roboto;
  font-size: 20px;
  color: ${colors.primary};
`;

const TopTextProfils = styled.h1`
  text-align: center;
  font-weight: lighter;
`;
const ProfilsSubtitle = styled.h2`
  font-weight: lighter;
  text-align: center;
  padding-bottom: 30px;
`;
const CardContainer = styled.div`
  font-family: lato;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grip-template-rows: 350px 350px;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Profils() {
  const [profilContact, setProfilContact] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchProfils() {
      setDataLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const { profilContact } = await response.json();
        setProfilContact(profilContact);
      } catch (error) {
        console.log(error);
      } finally {
        setDataLoading(false);
      }
    }
    fetchProfils();
  }, []);
  return (
    <ProfilsContainer>
      <TopTextProfils>Profils des contacts.</TopTextProfils>
      <ProfilsSubtitle>
        Faites le parcours de tous les contacts de Mokili event.
      </ProfilsSubtitle>

      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardContainer>
          {profilContact.map((profile, index) => {
            <Card
              key={`${profile.id}-${index}`}
              name={profile.name}
              email={profile.email}
              picture={DefaultPicture}
              adress={profile.adress}
              phone={profile.phone}
            />;
          })}
        </CardContainer>
      )}
    </ProfilsContainer>
  );
}

export default Profils;

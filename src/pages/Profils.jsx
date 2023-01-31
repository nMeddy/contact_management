import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../Styles/Colors";
import { Loader } from "../Styles/Customers";
import Card from "../components/Card/Card";
import DefaultPicture from "../assets/profile.png";

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
grip-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
`;

const DeleteContactBtn = styled.button`
  padding: 20px;
  width: 220px;
  background-color: ${colors.danger};
  color: ${colors.white};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
`;
const AddContactBtn = styled.button`
  padding: 20px;
  width: 220px;
  background-color: ${colors.success};
  color: ${colors.white};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
`;
const UpDateContactBtn = styled.button`
  padding: 20px;
  width: 220px;
  background-color: ${colors.warning};
  color: ${colors.white};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
`;

function Profils() {
  const [profilContact, setProfilContact] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchProfils() {
      try {
        const response = await fetch(
          `http://jsonplaceholder.typicode.com/users`
        );
        const profilContact = await response.json();
<<<<<<< HEAD
        console.log(profilContact);
        setProfilContact(profilContact);
        setDataLoading(true);
        return true;
=======
        setProfilContact(profilContact);
        setDataLoading(true);
        return true 
>>>>>>> cae8dae14ccd5e6d5d53dc5c153c0e1a82aa0707
      } catch (error) {
        console.log(error);
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
      <ButtonContainer>
        <AddContactBtn>Ajouter un contact</AddContactBtn>
        <DeleteContactBtn>Supprimer un contact</DeleteContactBtn>
        <UpDateContactBtn>Modifier un contact</UpDateContactBtn>
      </ButtonContainer>

      {!isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardContainer>
          {profilContact.map((profile, index) => {
<<<<<<< HEAD
            return (
              <Card
                key={`${profile.name}-${index}`}
                name={profile.name}
                email={profile.email}
                picture={DefaultPicture}
                adress={profile.adress}
                phone={profile.phone}
              />
            );
=======
            return(
              <Card
              key={`${profile.id}-${index}`}
              name={profile.name}
              email={profile.email}
              picture={DefaultPicture}
              adress={profile.adress}
              phone={profile.phone}
            />
            )
>>>>>>> cae8dae14ccd5e6d5d53dc5c153c0e1a82aa0707
          })}
        </CardContainer>
      )}
    </ProfilsContainer>
  );
}

export default Profils;

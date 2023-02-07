import React from "react";
import { useForm } from "react-hook-form";
import Register from "../../assets/register.png";
import Delete from "../../assets/modify.png";
import styled from "styled-components";
import colors from "../../Styles/Colors";

const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-around;
  gap: 5vh;
  background-color: rgb(46 56 77 / 30%);
  z-index: 0;
  font-family: roboto;
  font-weight: lighter;
  width: 650px;
  height: 650px;
  pointer-events: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid var(--gh-grey-4);
  border-radius: 4px;
  outline: 0;
  padding: 10vh;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-family: roboto;
  font-weight: lighter;
`;
const FistDivModal = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageModal = styled.img`
  max-width: 80px;
`;
const ModalTitle = styled.h3`
  font-family: roboto;
  font-weight: lighter;
`;
const ModaltextContent = styled.div`
  display: flex;
  align-items: center;
`;
const Modaltext = styled.span`
  font-size: 16px;
`;
const ModaltextDanger = styled.span`
  font-size: 14px;
  font-style:italic;
  color:${colors.danger};
`;
const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  gap: 5vh;
  font-family: roboto;
`;
const ModalInput = styled.input`
  border: none;
  border-bottom: 0.5px gray solid;
  padding: 1vh;
  width: 50vh;
  outline: none;
  background: transparent;
  &::placeholder {
    font-family: roboto;
    font-size: 15px;
    font-weight: lighter;
  }
`;
const ModalFooterButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 82px;
  box-sizing: border-box;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  font-weight: 500px;
  position: relative;
  outline: none;
  gap: 8px;
  user-select: none;
  height: 40px;
  padding: 0 16px;
  text-decoration: none;
`;
const CloseModalBtn = styled.button`
  padding: 1vh;
  background-color: ${colors.danger};
  color: ${colors.white};
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
`;
const SubmitModal = styled.input`
  padding: 2vh;
  width: 220px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

//.......... Modal function ........

function Modal({ openModal, setOpenModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: ``,
      mail: ``,
      telephone: ``,
    },
  });
  console.log(errors);

  function closeModal() {
    setTimeout(() => {
      setOpenModal(false);
    }, 300);
  }

  return (
    <ModalMain>
      <ModalContainer>
        <FistDivModal>
          <ImageModal src={Register} />
          <ModalTitle>Enregistrer un nouveau contact</ModalTitle>
        </FistDivModal>
        <div>
          <CloseModalBtn onClick={closeModal}>Fermer</CloseModalBtn>
        </div>
      </ModalContainer>

      <ModaltextContent>
        <Modaltext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
          unde vitae, quod ullam excepturi iste aperiam ad voluptas fuga, dolore
          ducimus numquam tenetur, voluptates vel.
        </Modaltext>
      </ModaltextContent>

      <ModalFormContainer>
        <ModalForm
          onSubmit={handleSubmit((data) => {
            alert(data);
          })}
        >
          <ModalInput
            type="text"
            placeholder="Entrez le nom au complet du contact"
            {...register("nom", { required: `Renseignez ce champs !` })}
          />
          <ModaltextDanger>{errors.nom?.message}</ModaltextDanger>
          <ModalInput
            type="mail"
            placeholder="Entrez l'adresse mail du contact"
            {...register("mail", { required: `Renseignez ce champs !` })}
          />
          <ModaltextDanger>{errors.mail?.message}</ModaltextDanger>
          <ModalInput
            type="phone"
            placeholder="Entrez le numéro de téléphone"
            {...register("telephone", { required: `Renseignez ce champs !` })}
            />
            <ModaltextDanger>{errors.telephone?.message}</ModaltextDanger>
            <SubmitModal type="submit"/>
        </ModalForm>
      </ModalFormContainer>
      <ModalFooterButton>
      </ModalFooterButton>
    </ModalMain>
  );
}

export default Modal;

import React from 'react';
import { useGlobalContext } from '../../Context';
import {
  Modal,
  Overlay,
  ImgContainer,
  ModalContent,
  Image,
  Text,
  Title,
  ButtonContainer,
  LinkButton,
  CloseBtn,
  ExitIcon,
  LinkBox,
} from './ModalElements';

const DetailsModal = () => {
  const { state, handleCloseModal } = useGlobalContext();
  const { title, displayImage, websiteLink, githubLink, description } =
    state.modalContent;
  return (
    <Overlay active={state.isModalOpen}>
      <Modal>
        <ModalContent>
          <ImgContainer>
            <Image src={displayImage} />
          </ImgContainer>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </ModalContent>

        <ButtonContainer>
          <CloseBtn onClick={handleCloseModal}>
            <ExitIcon />
          </CloseBtn>
          <LinkBox>
            <LinkButton href={githubLink}>
              Source Code
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </LinkButton>
            <LinkButton href={websiteLink}>
              Live Version
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </LinkButton>
          </LinkBox>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

export default DetailsModal;

import React from 'react';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  ProfileContainer,
  ProfileAvatar,
  ProfileInfoContainer,
  ProfileName,
  ProfileSubject,
  BioDescription,
  ProfileContainerFooter,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  FavoriteIcon,
  ContactButton,
  ContactButtonIcon,
  ContactButtonText,
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
          }}
        />

        <ProfileInfoContainer>
          <ProfileName>Yago Cunha</ProfileName>
          <ProfileSubject>Música</ProfileSubject>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BioDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.
      </BioDescription>

      <ProfileContainerFooter>
        <Price>Preço/hora {'  '}</Price>
        <PriceValue>R$ 80,00</PriceValue>
      </ProfileContainerFooter>

      <ButtonsContainer>
        <FavoriteButton favorited={false}>
          <FavoriteIcon source={heartOutlineIcon} />
        </FavoriteButton>

        <ContactButton>
          <ContactButtonIcon source={whatsAppIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TeacherItem;

import {
  GoBackButton,
  GoBackButtonIcon,
  HeaderTitle,
  Logo,
  PageHeaderContainer,
  TopBar,
} from './styles';
import React, {ReactNode} from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  name?: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  const {goBack} = useNavigation();

  function handleGoBackButton() {
    goBack();
  }
  return (
    <PageHeaderContainer>
      <TopBar>
        <GoBackButton onPress={handleGoBackButton}>
          <GoBackButtonIcon source={backIcon} />
        </GoBackButton>

        <HeaderTitle>{title}</HeaderTitle>

        <Logo source={logoImg} resizeMode="contain" />
      </TopBar>
    </PageHeaderContainer>
  );
};

export default PageHeader;

import {
  GoBackButton,
  GoBackButtonIcon,
  Header,
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
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
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

        <Logo source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        {headerRight}
      </Header>

      {children}
    </PageHeaderContainer>
  );
};

export default PageHeader;

import React from 'react';
import BaseButton from '../../components/BaseButton';
import { Container, Input, TextTitle } from './styles';
import colors from '../../styles/colors';

const LoginScreen: React.FC = () => {
  async function doLogin() {}

  return (
    <Container>
      <TextTitle>Login</TextTitle>
      <Input placeholder="Usuário" />
      <Input placeholder="Senha" secureTextEntry={true} />
      <BaseButton
        title={'Entrar'}
        color={colors.base}
        doClick={() => {
          doLogin;
        }}
      />
    </Container>
  );
};

export default LoginScreen;

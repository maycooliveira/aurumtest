import React from 'react';
import { ButtonTitle, Container } from './styles';

interface Props {
  title: string;
  color: string;
  doClick: () => void;
}

const BaseButton: React.FC<Props> = (props) => {
  const { title, doClick, color } = props;
  return (
    <Container onPress={doClick} backgroundColor={color}>
      <ButtonTitle>{title.toUpperCase()}</ButtonTitle>
    </Container>
  );
};

export default BaseButton;

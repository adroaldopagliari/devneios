import React from 'react';
import { History } from 'history';
import { IoLogoGithub } from 'react-icons/io';

import { Container, Content, Button, Logo } from './styles';

type Props = {
  history: History;
};

export const Home: React.FC<Props> = ({ history }) => {
  return (
    <Container>
      <Content>
        <Logo />
        <form>
          <Button onClick={() => history.push('/dashboard')}>
            <IoLogoGithub size={36} color="#fff" />
            <span>Login with Github</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

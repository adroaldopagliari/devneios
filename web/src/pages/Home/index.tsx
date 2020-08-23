import React, { useState } from 'react';
import { History } from 'history';
import { FaCheck } from 'react-icons/fa';

import { Container, Content, Button, Input } from './styles';

type Props = {
  history: History;
};

export const Home: React.FC<Props> = ({ history }) => {
  const [input, setInput] = useState<string>('');

  return (
    <Container>
      <Content>
        <form>
          <Input type="text" placeholder="E-mail" />
          <Button onClick={() => history.push('/dashboard')}>
            <FaCheck size={36} color="#fff" />
            <span>Login or register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

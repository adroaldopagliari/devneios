import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { History } from 'history';
import { FaCheck } from 'react-icons/fa';

import { Container, Content, Button, Input } from './styles';

type Props = {
  history: History;
};

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: { email: $email }) {
      id
    }
  }
`;

export const Home: React.FC<Props> = ({ history }) => {
  const [input, setInput] = useState<string>('');

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

  useEffect(() => {
    if (data) {
      const { createOrLoginUser: user } = data;
      const { id } = user;

      history.push(`/dashboard?id=${id}`);
    }
  }, [data, history]);

  async function handleRegister(e: React.MouseEvent): Promise<void> {
    e.preventDefault();

    if (!input) {
      alert('Insert a valid e-mail');
      return;
    }

    createOrLoginUser({ variables: { email: input } });
    setInput('');
  }

  return (
    <Container>
      <Content>
        <form>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <Button onClick={handleRegister}>
            <FaCheck size={36} color="#fff" />
            <span>Login or register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

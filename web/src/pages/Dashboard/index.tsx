import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Container, Message } from './styles';

interface Note {
  id: string;
  content: string;
  user: {
    email: string;
  };
}

const GET_ALL_MESSAGES = gql`
  query {
    getNotes {
      id
      content
      user {
        email
      }
    }
  }
`;

export const Dashboard: React.FC = () => {
  const { loading, data } = useQuery<{ getNotes: Note[] }>(GET_ALL_MESSAGES);

  if (loading) return <p>Loading ...</p>;

  return (
    <Container>
      {data?.getNotes.map((item) => (
        <Message key={item.id}>
          <span>{item.user.email}</span> <br />
          <p>{item.content}</p>
        </Message>
      ))}
    </Container>
  );
};

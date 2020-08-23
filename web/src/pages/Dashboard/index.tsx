import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Container } from './styles';

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
    <div>
      {data?.getNotes.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
};

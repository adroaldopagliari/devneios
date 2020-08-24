import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 4px;
  color: #fff;

  & + div {
    margin-top: 20px;
  }

  span {
    padding-top: 20px;
    font-weight: bold;
    font-size: 12px;

    opacity: 0.6;
  }
`;

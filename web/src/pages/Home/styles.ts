import styled from 'styled-components';

import stars from '../../assets/images/stars.svg';
import logo from '../../assets/images/logo.svg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateX(-50%);
    width: 100%;
    height: 706.125px;
    opacity: 0.2;
    min-height: 100vh;
    background: url(${stars}) top center repeat-x;
    z-index: 0;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.div`
  background: url(${logo}) center no-repeat;
  background-size: cover;
  width: 264px;
  height: 62px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  border: none;
  min-width: 220px;
  padding: 10px;
  border-radius: 6px;
  background-color: rgba(17, 17, 17, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  transition: background-color 0.2s ease-in-out;

  span {
    margin-left: 10px;
    color: #fff;
    font-size: 14px;
  }

  &:hover {
    background-color: rgba(17, 17, 17, 0.8);
  }
`;

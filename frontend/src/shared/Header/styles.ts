import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { User } from '@styled-icons/boxicons-solid/User';

export const Container = styled.div`
  grid-area: 'Header';
  position:fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid var(--gray5);
  box-shadow: 0 3px 7px 0 rgba(110,112,114,0.21);
`;

export const HomeLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: var(--gray1);
  text-decoration: none;
`;

export const SignInfoLink = styled(Link)`
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  background-color: transparent;
  color: var(--gray2);
  text-decoration: none;
  > span {
    margin-left: 10px;
  }
  &:focus {
    outline-color: var(--gray5);
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 10px;
  border: 1px solid var(--gray5);
  border-radius: 3px;
  color: var(--gray2);
  background-color: white;
  width: 200px;
  height: 30px;

  &:focus {
    outline-color: var(--gray5);
  }
`;

export const AuthInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserIcon = styled(User)`
  width: 16px;
  height: 16px;
  color: black;
  opacity: 0.6;
`;
import React from 'react';
import { Container, SignInfoLink, Input, UserIcon, AuthInfo, HomeLink } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HomeLink to="/">Q & A</HomeLink>
      <Input placeholder="Search..." />
      <AuthInfo>
        <span>josenerydev@gmail.com</span>
        <SignInfoLink to="/questions">
          <UserIcon title="User" />
          <span>Sign Out</span>
        </SignInfoLink>
      </AuthInfo>
    </Container>
  );
};

export default Header;
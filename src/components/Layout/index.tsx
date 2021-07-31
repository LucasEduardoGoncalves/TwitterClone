import React from 'react';

import { Container, Wrapper } from './styles';

import Main from '../Main';
import MenuBar from '../MenuBar';

export const Layout: React.FC = () => {
  return (
    <Container>
        <Wrapper>
          <MenuBar/>
          <Main/>
          {/* <SideBar/> */}
        </Wrapper>
    </Container>
  );
};
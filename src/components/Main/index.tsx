import React from 'react';

import { ProfilePage } from '../ProfilePage';
import { Feed } from '../Feed';

import { 
  Container, 
  Header, 
  ProfileInfo, 
  BackIcon, 
  BottomMenu, 
  HomeIcon, 
  SearchIcon, 
  BellIcon, 
  EmailIcon 
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Lucas Gonçalves</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage/>
      <Feed/>

      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
    </Container>
  );
}

export default Main;
import React from 'react';

import { Tweet } from '../Tweet';

import { 
    Container,
    Tab,
    Tweets
} from './styles';

export const Feed: React.FC = () => {
  return (
    <Container>
        <Tab>Tweets</Tab>

        <Tweets>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </Tweets>
    </Container>
  );
}
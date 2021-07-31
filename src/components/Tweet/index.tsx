import React from 'react';

import { 
    Container,
    Retweeted,
    CarpintariaDigitalIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImagemContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

export const Tweet: React.FC = () => (
    <Container>
        <Retweeted>
            <CarpintariaDigitalIcon />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>CarpintariaDigital</strong>
                    <span>@carpintaria_digital</span>
                    <Dot />
                    <time>27 de jun</time>
                </Header>

                <Description>Montando seu conhecimento 🪚</Description>

                <ImagemContent/> 
                    
                <Icons>
                    <Status>
                        <CommentIcon/>
                        18
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        18
                    </Status>

                    <Status>
                        <LikeIcon/>
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
);
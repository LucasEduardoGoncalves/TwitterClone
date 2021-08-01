import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';

import { List } from '../List';
import { FollowSuggestion } from '../FollowSuggestion';
import { News } from '../News';

import { 
    Container,
    SearchWrapper,
    AreaInput,
    SearchIcon,
    SearchInput,
    Body
} from './styles';

const SideBar: React.FC = () => {
    const [focus, setFocus] = useState(false);

    return (
        <Container>
            <SearchWrapper>            
                <AreaInput className={`${focus && 'focused'}`}>
                    <SearchIcon/>
                    <SearchInput onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} placeholder="Buscar no Twitter"/>
                </AreaInput>
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion
                                name="Luis Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion
                                name="Luke Morales"
                                nickname="@lukemorales"
                            />,
                            <FollowSuggestion
                                name="Camila Magalhães"
                                nickname="@camilaamgl"
                            />,
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News/>,
                            <News/>,
                            <News/>,
                            <News/>
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News/>,
                            <News/>,
                            <News/>,
                            <News/>
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News/>,
                            <News/>,
                            <News/>,
                            <News/>
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News/>,
                            <News/>,
                            <News/>,
                            <News/>
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News/>,
                            <News/>,
                            <News/>,
                            <News/>
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
  );
}

export default SideBar;
import React, { useState } from 'react';

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

            <Body>
                {/* <p>{'Lorem ipsum dolor sit amet'.repeat(90)}</p> */}
            </Body>
        </Container>
  );
}

export default SideBar;
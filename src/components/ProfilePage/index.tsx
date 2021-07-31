import React from 'react';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    EditButton,
    LocationIcon, 
    CakeIcon, 
    Followage 
} from './styles';

export const ProfilePage: React.FC = () => {
  return(
        <Container>
            <Banner>
                <Avatar/>
            </Banner>

            <ProfileData>
                <EditButton outlined={true}>Editar Perfil</EditButton>
                <h1>Lucas Gonçalves</h1>
                <h2>@lucas_goncalves</h2>

                <p>
                    Developer at <a href="/">Carpintaria Digital</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon/>
                        São João Del Rei, Brasil
                    </li>

                    <li>
                        <CakeIcon/>
                        Nascido (a) em 19 de março de 2004
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
  );
}
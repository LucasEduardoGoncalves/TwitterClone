import styled, { css } from 'styled-components';

import { AiFillHome, IoIosNotifications, MdEmail, MdFavorite, IoMdPerson } from '../../styles/Icons';

// IoExit, GiHandSaw

export const Container = styled.div`
  
`;

export const TopSide = styled.div`

`; 

export const Logo = styled.div`

`;

export const MenuButton = styled.div`

`;

const iconCss = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;

    color: var(--white);
    fill: var(--white);
`;

export const HomeIcon = styled(AiFillHome)`${iconCss}`;
export const BellIcon = styled(IoIosNotifications)`${iconCss}`;
export const EmailIcon = styled(MdEmail)`${iconCss}`;
export const FavoriteIcon = styled(MdFavorite)`${iconCss}`;
export const ProfileIcon = styled(IoMdPerson)`${iconCss}`;
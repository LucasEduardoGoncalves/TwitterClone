import styled, { css } from 'styled-components';

import { AiFillHome, IoIosNotifications, MdEmail, MdFavorite, IoMdPerson, GiHandSaw, IoExit } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media(min-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: sticky;
      top: 0;
      left: 0;

      padding: 9px 19px 20px;

      max-height: 100vh;
      overflow-y: auto;
  }
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1280px) {
        align-items: flex-start;
    }
`; 

export const Logo = styled(GiHandSaw)`
    width: 41px;
    height: 41px;

    > path {
        fill: var(--twitter);
    }

    margin: 0 15px 20px;
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media(min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }

        width: 100%;
    }

    padding: 8.25px 15px;
    outline: 0;

    & + button {
        margin-top: 16.6px;
    }

    & + button:last-child {
        margin-top: 33px;

        width: 40px;
        height: 40px;

        > span {
            display: none;
        }

        @media(min-width: 1280px) {
            width: 100%;
            height: unset;

            > span {
                display: inline;
            }
        }
    }

    cursor: pointer;
    border-radius: 25px;
    transition: background-color 0.2s;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover, &.active {
        span, svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }
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

export const BotSide = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
    margin: 0 15px;
`;
export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    flex-shrink: 0;
    
    border-radius: 50%;
    background: var(--gray);
`;
export const ProfileData = styled.div`
    display: none;

    @media(min-width: 1280px) {
        display: flex;
        flex-direction: column;

        margin-left: 10px;

        > span {
            color: var(--gray);
        }
    }
`;

export const ExitIcon = styled(IoExit)`
    display: none;

    @media(min-width: 1280px) {
        display: inline-block;

        width: 25px;
        height: 25px;

        color: var(--white);
        margin-left: 35px;

        cursor: pointer;

        > path {
            transition: color 0.2s;
        }

        &:hover {
            > path {
                color: var(--like);
            }
        }
    }
`;
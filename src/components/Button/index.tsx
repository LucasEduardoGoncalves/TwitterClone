import styled, { css } from 'styled-components';

interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    /* ${props => props.outlined && css`
        background: transparent;
        color: var(--twitter);
        border: 1px solid var(--twitter);
    `}; */
    background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
    color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'};
    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    transition: background-color 0.2s;

    &:hover {
        background: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-ligth-hoover'};
    }
`;
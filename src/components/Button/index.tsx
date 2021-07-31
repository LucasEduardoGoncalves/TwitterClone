import styled, { css } from 'styled-components';

interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background: var(--twitter);
    color: var(--white);
    border: none;

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    transition: background-color 0.2s;

    &:hover {
        background: var(--twitter-ligth-hoover);
    }

    ${props => props.outlined && css`
        background: transparent;
        color: var(--twitter);
        border: 1px solid var(--twitter);

        &:hover {
            background: var(--twitter-dark-hover);
        }
    `};
`;
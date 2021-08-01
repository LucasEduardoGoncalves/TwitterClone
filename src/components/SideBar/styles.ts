import styled from 'styled-components';

import { AiOutlineSearch } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media(min-width: 1000px) {
      display: flex;
      flex-direction: column;

      width: min(395px, 100%);
  }
`;

export const SearchWrapper = styled.div`
    padding: 10px 24px;
    width: min(395px, 100%);

    position: fixed;
    top: 0;
    z-index: 2;

    background: var(--primary);
    max-height: 62px;

    .focused {
        border: 1px solid var(--twitter);
        svg {
            fill: var(--twitter);
        }
    }
`;

export const AreaInput = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0 10px;

    border-radius: 19.5px;
    background: var(--search);
    border: 1px solid var(--search);

    width: 100%;
    height: 42px;
`;

export const SearchInput = styled.input`
    font-size: 14px;
    width: 100%;

    outline: 0;
    background: transparent;

    &::placeholder {
        color: var(--gray);
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    width: 27px;
    height: 27px;

    fill: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;

    padding: 57px 24px 200px;
    margin-top: 3px;

    gap: 15px;
`;

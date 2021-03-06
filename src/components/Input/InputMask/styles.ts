import styled, { css } from 'styled-components';
import Tooltip from '../../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #f9f9f9;
    border-radius: 10px;
    padding: 12px;
    width: 100%;

    border: 1px solid #c8c8c8;

    display: flex;
    align-items: center;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            color: #e82b43;
            border-color: #e82b43;
        `}

    input {
        background: transparent;
        border: 0;
        flex: 1;
        color: #232129;
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030;
        }
    }
`;

import styled from 'styled-components';

import { baseTheme } from '../../styles/theme';

export const StyledSearch = styled.div`
  display: flex;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.darkMode && '0 16px'};
  border-radius: ${(props) => (props.darkMode ? '4px' : '50px')};
  background-color: ${(props) =>
    props.darkMode ? baseTheme.colors.secondary : baseTheme.colors.bg};
`;

export const StyledInput = styled.input`
  max-width: ${(props) => props.maxWidthInput};
  padding: 5px 8px;
  border: none;
  color: ${baseTheme.colors.secondaryText};
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  &:focus {
    border: none;
  }

  &::-webkit-input-placeholder {
    color: ${baseTheme.colors.secondaryText};
  }

  &::-moz-placeholder {
    color: ${baseTheme.colors.secondaryText};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  img {
    width: 16px;
    height: 16px;
  }
`;

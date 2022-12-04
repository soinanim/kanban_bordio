import styled from 'styled-components';

import { baseTheme } from '../../styles/theme';

export const StyledSearchInput = styled.div`
  display: flex;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};

  margin: ${(props) => props.darkMode && '0 16px'};
  border-radius: ${(props) => (props.darkMode ? '4px' : '50px')};
  background-color: ${(props) =>
    props.darkMode ? baseTheme.colors.secondary : baseTheme.colors.bg};
`;

export const StyledInput = styled.input`
  border: none;
  color: ${baseTheme.colors.secondaryText};
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  max-width: ${(props) => props.maxWidthInput};
  padding: 5px 8px;

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

export const StyledSearchButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

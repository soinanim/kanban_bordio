import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  background: ${baseTheme.colors.bg};
  border-radius: 50px;
`;

export const StyledSelect = styled.select`
  margin-right: 6px;
  color: ${baseTheme.colors.primaryText};
  background-color: transparent;
  font: ${baseTheme.font.primary};
  border: none;
  appearance: none;
  pointer-events: none;

  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50px;
  color: #fff;
  background-color: ${baseTheme.colors.primary};
  padding: 8px 20px;
  font: ${baseTheme.font.primary};
`;

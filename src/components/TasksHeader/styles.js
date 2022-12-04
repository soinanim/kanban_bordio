import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 11px;
  padding-left: ${(props) => props.isFirstColumn && '8px'};
`;

export const StyledH5 = styled.h5`
  color: #222222;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-right: 10px;
`;

export const StyledQuantity = styled.span`
  padding: 2px 9px;
  border-radius: 100px;
  font: ${baseTheme.font.primary};
  background: #e8ebef;
  color: ${baseTheme.colors.secondaryText};
`;

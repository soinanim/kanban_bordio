import styled, { css } from 'styled-components';

import { baseTheme } from '../../styles/theme';

const fontStyles = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

export const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  color: #fff;
  font: ${baseTheme.font.primary};

  &.active {
    background-color: ${baseTheme.colors.secondary};
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.workspace {
    flex-direction: row;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
    width: 100%;
    margin-bottom: 13px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 19px;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 8px;
`;

export const StyledSubLi = styled.li`
  list-style-type: none;
  color: ${baseTheme.colors.secondaryText};
  font: ${baseTheme.font.primary};

  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;

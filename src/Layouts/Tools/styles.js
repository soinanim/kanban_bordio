import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledTools = styled.div`
  background-color: ${baseTheme.colors.bg};
`;

export const StyledH3 = styled.h3`
  margin: 25px 16px 37px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

export const StyledLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 10px;
  color: ${baseTheme.colors.primaryText};
  font: ${baseTheme.font.primary};
  list-style-type: none;

  &:not(:first-child) {
    padding: 11px 0 11px 10px;
  }

  &.active {
    color: ${baseTheme.colors.primary};
    background-color: #fff;
    border-radius: 0px 8px 8px 0px;

    &:before {
      content: '';
      position: absolute;
      width: 4.12px;
      height: 49px;
      left: 0;
      top: 0;
      background: ${baseTheme.colors.primary};
      border-radius: 0px 10px 10px 0px;
    }
  }
`;

export const StyledImg = styled.img`
  margin-right: 10px;
`;

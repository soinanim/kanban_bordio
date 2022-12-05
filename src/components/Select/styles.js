import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledSelect = styled.div`
  position: relative;
  padding: 8px 14px 8px 22px;
  border-radius: 50px;
  background: ${(props) => (props.active ? '#E1E4E7' : baseTheme.colors.bg)};
  color: ${baseTheme.colors.primaryText};
  font: ${baseTheme.font.primary};
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 48px;
  left: 1px;

  display: flex;
  flex-direction: column;
  width: 132px;
  padding: 7px 6px 5px;

  background-color: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  opacity: ${(props) => (props.active ? '1' : '0')};
  z-index: 8;
  transition: all 0.3s ease-out;
`;

export const StyledInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #f5f8fa;
  }

  &:checked + label:hover {
    background-color: #e1e4e7;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  height: 40px;
  max-height: ${(props) => (props.active ? '40px' : '0')};
  transition: all 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;
  font: ${baseTheme.font.primary};

  &:hover {
    background-color: #e1e4e7;
  }
`;

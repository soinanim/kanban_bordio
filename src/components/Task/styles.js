import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledTaskCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  background-color: #d8dcff;
  padding: 16px 10px 17px 15px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.completed ? '#A5A5A5' : '#222222')};
`;

export const StyledTaskTitle = styled.span`
  font: ${baseTheme.font.primary};
  margin-bottom: 4px;
  text-decoration: ${(props) => props.completed && 'line-through'};
`;

export const StyledTaskDuration = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => (props.completed ? '#A5A5A5' : props.color)};
`;

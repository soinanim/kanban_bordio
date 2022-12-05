import styled from 'styled-components';

export const StyledTasks = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 26px;
  align-items: center;

  &:before {
    content: '';
    display: block;
    position: absolute;
    right: -1px;
    top: ${(props) => (props.isPenultColumn ? '0' : '56px')};
    bottom: 0;
    width: 1px;
    background-color: #f3f3f3;
    border-right: 1px solid #f3f3f3;
    height: ${(props) => (props.isPenultColumn ? '100%' : 'calc(100% - 56px)')};
  }
`;

export const StyledHorizontalLine = styled.div`
  border-bottom: 1px solid #f3f3f3;
  width: 100%;
`;

export const StyledTask = styled.div`
  padding: ${(props) => (props.firstColumn ? '39px 10px 0 20px' : '39px 10px')};
  display: grid;
  gap: 10px;
`;

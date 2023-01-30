import styled from 'styled-components';

import avatar from '../../img/avatar@2x.png';

export const StyledUserAvatar = styled.div`
  height: ${(props) => (props.small ? '22px' : '40px;')};
  width: ${(props) => (props.small ? '22px' : '40px;')};
  background: center / contain no-repeat url(${avatar});
`;

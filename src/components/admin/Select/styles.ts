import styled from 'styled-components';
import ReactSelect from 'react-select';

import ToolTip from '../Tooltip';

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex: 1;
`;
export const SelectCustom = styled(ReactSelect)`
  width: 100%;
`;

export const Error = styled(ToolTip)`
  position: relative;
  margin-left: 10px;
  margin-right: 5px;
  height: 20px;

  svg {
    position: relative;
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

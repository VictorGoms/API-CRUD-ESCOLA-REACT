import styled from 'styled-components';
import * as color from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid ${color.primaryDarkColor};
    padding: 0 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  &:focus {
    border: 2px solid ${color.lineColor};
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as color from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 2px solid ${color.lineColor};
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0px 10px 0px;
  color: blue;
`;

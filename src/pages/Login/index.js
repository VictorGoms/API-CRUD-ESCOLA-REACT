import React from 'react';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isEmail } from 'validator';

import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/global';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido ');
    }

    if (password.length < 3 || password.length > 255) {
      formErrors = true;
      toast.error('Senha inválida');
    }
    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login </h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}

import React, { useState } from 'react';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isEmail } from 'validator';

// eslint-disable-next-line import/no-extraneous-dependencies
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/global';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, {});

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido ');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }
    if (formErrors) return;

    try {
      await axios.post('/users/', { nome, password, email });
      toast.success('Registrado com sucesso');
      history.push('/login');
    } catch (er) {
      const errors = get(er, 'response.data.errors', 0);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu Nome..."
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email..."
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua Senha..."
          />
        </label>

        <button type="submit">{id ? 'Editar conta' : 'Criar conta'}</button>
      </Form>
    </Container>
  );
}

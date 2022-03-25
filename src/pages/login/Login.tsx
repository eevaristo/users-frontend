import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './styles.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    api
      .post(
        '/login',
        { email, password },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log(res);
        navigate('/home');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <section className="general-login">
        <form onSubmit={login}>
          <div className="login">
            <div className="imagem">
              <img
                src="https://miro.medium.com/max/1400/0*k9CL2yoHU6ELTkmi.png"
                alt="react"
              />
            </div>
            <h2>Login</h2>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </section>
    </>
  );
};

import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../../css/signup-main.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    setError('');
    setSuccess('Cadastro realizado com sucesso!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Cadastro</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      <div className="login-link">
        <p>Já tem uma conta? <Link to="/">Voltar para o Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;

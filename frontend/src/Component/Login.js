import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', true);
      alert("Confirm Your Credentials" + "\n" + "Email: " + email + "\n" + "Password: " + password);
      setShowRoleSelection(true);
    } else {
      setMessage("Invalid credentials!");
    }
  }

  const handleRoleSelection = (role) => {
    localStorage.setItem('role', role); 
    if (role === 'poster') {
      navigate('/post');
    } else if (role === 'seeker') {
      navigate('/jobs');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      {!showRoleSelection ? (
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="role-selection">
          <h3>You're logged in. Are you a:</h3>
          <button onClick={() => handleRoleSelection('poster')}>Job Poster</button>
          <button onClick={() => handleRoleSelection('seeker')}>Job Seeker</button>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;

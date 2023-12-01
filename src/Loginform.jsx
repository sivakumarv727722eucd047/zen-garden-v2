import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

// Glassmorphic success message component
const SuccessMessage = ({ onClose }) => (
  <div className="glassmorphic-success">
    <p>Login successful!</p>
    <button onClick={onClose}>Close</button>
  </div>
);

// Glassmorphic failed message component
const FailedMessage = ({ onClose }) => (
  <div className="glassmorphic-failed">
    <p>Login failed. Please enter both username and password.</p>
    <button onClick={onClose}>Close</button>
  </div>
);

// Glassmorphic invalid username message component
const InvalidUsernameMessage = ({ onClose }) => (
  <div className="glassmorphic-failed">
    <p>Login failed. Please enter a valid email address as the username.</p>
    <button onClick={onClose}>Close</button>
  </div>
);

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [showInvalidUsername, setShowInvalidUsername] = useState(false);

  const apiUrl = 'https://65693599de53105b0dd6cb2b.mockapi.io/api/reactjs/users';

  const handleLogin = () => {
    // Check if username and password are entered
    if (!username || !password) {
      setShowFailed(true);
      return;
    }

    // Check if the username is in email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setShowInvalidUsername(true);
      return;
    }

    // Send data to mock API
    axios.post(apiUrl, { username, password })
      .then(response => {
        console.log(response.data);
        setShowSuccess(true);
      })
      .catch(error => {
        console.error('Error during login:', error);
        setShowFailed(true);
      });
  };

  const handleCloseMessage = () => {
    setShowSuccess(false);
    setShowFailed(false);
    setShowInvalidUsername(false);
    // You can add additional logic here if needed
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <span onClick={() => window.alert('Forgot Password clicked')}>Forgot Password</span>
        </div>
        <button type="button" className="btn" onClick={handleLogin}>
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <span style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>
              Register
            </span>
          </p>
        </div>
      </form>
      {showSuccess && <SuccessMessage onClose={handleCloseMessage} />}
      {showFailed && <FailedMessage onClose={handleCloseMessage} />}
      {showInvalidUsername && <InvalidUsernameMessage onClose={handleCloseMessage} />}
    </div>
  );
}

export default LoginForm;
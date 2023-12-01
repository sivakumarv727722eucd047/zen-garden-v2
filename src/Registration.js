import React from 'react';

import './register.css';
const App = () => {
  const validation = () => {
    // Add your validation logic here
    console.log('Form submitted');
    return false; // Return false to prevent the form from actually submitting
  };

  const handleLoginClick = () => {
    // Redirect to the login page
    window.location.href = 'http://127.0.0.1:5500/login.html';
  };

  return (
    <div className="container">
      <div className="form-box">
        <form name="Formfill" onSubmit={validation}>
    
          <h2>REGISTRATION</h2>
          <div className="input-box">
            <i className='bx bxs-user'></i>
            <input type="text" name="Username" placeholder="Username" />
          </div>
          <div className="input-box">
            <i className='bx bxs-envelope'></i>
            <input type="email" name="Email" placeholder="Email" />
          </div>
          <div className="input-box">
            <i className='bx bxs-lock-alt'></i>
            <input type="password" name="Password" placeholder="Password" />
          </div>
          <div className="input-box">
            <i className='bx bxs-lock' ></i>
            <input type="password" name="Confirm Password" placeholder="Confirm Password" />
          </div>
          <div className="button">
            <input type="submit" className="btn" value="Register" />
          </div>
          <div className="group">
            <span><a href=' '>FORGET PASSWORD</a></span>
            <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}>
              <d>LOGIN</d>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
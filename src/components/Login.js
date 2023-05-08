import React, { useState } from 'react';
import '/home/ruhi/navbar/src/components/style.css';

const Login = () => {
  const [user, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting login form with username: ', user, ' and password: ', pass);
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input value={user} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
      <p className="link-btn">Not registered? <a href="/register">Create an account</a></p>
      <p className="link-btn"><a href="/">Go to main page</a></p>
    </div>
  );
}

export default Login;

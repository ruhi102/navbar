import React, { useState } from 'react';
import '/home/ruhi/navbar/src/components/style.css';

const Register = () => {
  const [user, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting registration form with username: ', user, ' and password: ', pass);
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input value={user} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button type="submit">Register</button>
      </form>
      <p className="link-btn">Already registered? <a href="/login">Log In</a></p>
      <p className="link-btn"><a href="/">Go to main page</a></p>
    </div>
  );
}

export default Register;

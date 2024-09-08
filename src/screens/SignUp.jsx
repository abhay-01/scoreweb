import React, { useState } from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import { signUpWithEmail } from "../auth"
import "../styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUpWithEmail(email, password);
        navigate('/home');
    } catch (error) {
      alert('Sign up failed: ' + error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Sign Up</h1>
        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signUpButton" onClick={handleSignUp}>
          Sign Up
        </button>

        <p
          className="signinText"
          onClick={() => navigate('/signin')}
        >
            Already have an account? Sign In
        </p>
      </div>
    </div>
  );
};

export default SignUp;

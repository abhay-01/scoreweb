import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div style={styles.container}>
        <Link to="/home" style={styles.link}>Back to Home</Link>
      <div style={styles.card}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.text}>
          Social Score ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website, mobile applications, and any other related services (collectively, the "Services").
        </p>

        <h3 style={styles.subtitle}>Information We Collect</h3>
        <p style={styles.text}>
          <strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us when you register for an account, use our Services, or communicate with us. This may include:
        </p>
        <ul style={styles.list}>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Profile picture</li>
          <li>Payment information</li>
        </ul>

        <h3 style={styles.subtitle}>How We Use Your Information</h3>
        <p style={styles.text}>
          We use the information we collect for various purposes, including to:
        </p>
        <ul style={styles.list}>
          <li>Provide, operate, and maintain our Services</li>
          <li>Improve, personalize, and expand our Services</li>
          <li>Understand and analyze how you use our Services</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, for customer service, updates, promotions, and marketing purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <div style={styles.linkContainer}>
          <Link to="/terms" style={styles.link}>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    padding: '50px',
    maxWidth: '700px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '40px',
    marginBottom: '20px',
  },
  linkContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
  },
};

export default Privacy;

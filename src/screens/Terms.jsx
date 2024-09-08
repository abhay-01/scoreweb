import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div style={styles.container}>
                <Link to="/home" style={styles.link}>Back to Home</Link>

      <div style={styles.card}>
        <h1 style={styles.title}>Terms of Service</h1>
        <p style={styles.updated}>Last Updated: June 15, 2024</p>

        <p style={styles.text}>
          Welcome to Social Score. These Terms of Service ("Terms") govern your use of our services, including our website, mobile applications, and any other related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
        </p>

        <h3 style={styles.subtitle}>1. Acceptance of Terms</h3>
        <p style={styles.text}>
          By using our Services, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree to these Terms, you must not use our Services.
        </p>

        <h3 style={styles.subtitle}>2. Changes to Terms</h3>
        <p style={styles.text}>
          We may revise these Terms from time to time. If we make changes, we will notify you by revising the "Last Updated" date at the top of these Terms. Your continued use of the Services following the posting of changes means that you accept and agree to the changes.
        </p>

        <h3 style={styles.subtitle}>3. Accessing the Services</h3>
        <p style={styles.text}>
          We do not guarantee that our Services, or any content on them, will always be available or be uninterrupted. We may suspend, withdraw, or restrict the availability of all or any part of our Services for business and operational reasons.
        </p>

        <div style={styles.linkContainer}>
          <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
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
  updated: {
    fontSize: '14px',
    color: '#666',
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

export default Terms;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import succ from '../../assets/images/succ.png'

const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <img src={succ} alt="Succès" style={styles.logo} />
      <p style={styles.text}>Votre liste d'absence a été téléchargée avec succès</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '24px',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
};

export default SuccessPage;

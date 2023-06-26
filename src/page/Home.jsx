import { useAuth } from 'hooks';
import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <h2 style={styles.title}>Your Phonebook!</h2>
      ) : (
        <h2 style={styles.title}>Register or login to access the phonebook!</h2>
      )}
    </div>
  );
}

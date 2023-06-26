import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'email':
  //         return setEmail(value);
  //       case 'password':
  //         return setPassword(value);
  //       default:
  //         return;
  //     }
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // setEmail('');
    // setPassword('');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
      <label style={styles.label}>
        Email
        <input
          type="email"
          name="email"
          // value={email}
          // onChange={handleChange}
        />
      </label>
      <label style={styles.label}>
        Password
        <input
          type="password"
          name="password"
          // value={password}
          // onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

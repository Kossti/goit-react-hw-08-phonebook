import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'name':
  //         return setName(value);
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
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
      <label style={styles.label}>
        UserName
        <input
          type="text"
          name="name"
          //   value={name}
          //   onChange={handleChange}
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};

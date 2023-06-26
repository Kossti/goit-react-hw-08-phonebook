import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    backgroundColor: 'rgba(62, 86, 146, 0.727)',
    color: 'whitesmoke',
    marginRight: 10,
    padding: '10px 15px',
    border: 'none',
    borderRadius: '6px',
    boxShadow: '0px 1px 2px rgba(108, 128, 146, 0.372)',
    fontSize: '18px',
    textTransform: 'capitalize',
    cursor: 'pointer',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <p style={styles.name}>You are welcome, {user.name}</p>
      <button
        style={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};

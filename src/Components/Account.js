import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import classes from '../Styles/Account.module.css'
const Account = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
    return (
        <div className={classes.account}>
        {
        user ? <>
          <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <span>{user.displayName}</span>
        <span class="material-icons-outlined" title="Logout" onClick={logout}> logout </span>
          </>: <>
          <Link to="/signup">Signup</Link>
           <Link to="/login">Login</Link>
          </>
         }
        
      </div>
    );
};

export default Account;
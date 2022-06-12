import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const LoginForm = () => {
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {
        navigate(from, { replace: true });
    }
}, [user, navigate, from])
  const [
    signInWithEmailAndPassword,
    ,
  loading,
  error,
  ] = useSignInWithEmailAndPassword(auth);
  const [useremail,setUseremail] =useState('')
  const [userpassword, setUserpassword] = useState('')
  const submitvalue = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(useremail,userpassword)
  }
    return (
        <Form style={{ height: "330px" }} onSubmit={submitvalue}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={useremail} onChange={(e) => setUseremail(e.target.value)}required
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={userpassword} onChange={(e) => setUserpassword(e.target.value)}required
      />
        {
          error && <spam className='error'>{error.message}</spam>
     }
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
    );
};

export default LoginForm;

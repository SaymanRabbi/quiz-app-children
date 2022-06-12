import React, { useState } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Button from './Button';
import { Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
const SignupForm = () => {
    const history = useNavigate()
    const [updateProfile] = useUpdateProfile(auth);
    const [ createUserWithEmailAndPassword, ,loading]=useCreateUserWithEmailAndPassword(auth);
    const [username,setUsername] =useState('')
    const [useremail,setUseremail] =useState('')
    const [userpassword,setUserpassword] =useState('')
    const [cofirmPassword,setConfirmPassword] =useState('')
    const [checked, setChecked] = useState(false)
    const [error,setError]=useState('')
    const sumitValue = async(event) => {
        event.preventDefault();
        if (userpassword !== cofirmPassword) {
            return setError("Password Don't Match")
        }
        try {
            setError('')
            await createUserWithEmailAndPassword(useremail,userpassword)
            await updateProfile({ displayName: username });
            history('/')
        }
        catch {
            setError('Failed to create an account')
        }

    }
    return (
        <Form style={{height:'500px'}} onSubmit={sumitValue}>
            <TextInput type='text' placeholder="Enter name" icon="person"
                value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <TextInput type='email' placeholder="Enter Email" icon="alternate_email"
            value={useremail} onChange={(e) => setUseremail(e.target.value)}required 
            />
            <TextInput type='password' placeholder="Enter password" icon="lock"
            value={userpassword} onChange={(e) => setUserpassword(e.target.value)}required 
            />
            <TextInput type='password' placeholder="Confirm password" icon="lock_clock"
            value={cofirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required 
            />
                    <Checkbox text="I agree to the Terms &amp; Cinditions"  onClick={()=>setChecked(!checked)} required/>
                    <Button disabled={loading} type="submit"> 
                        <span>
                        Submit Now
                </span>
                
            </Button>
            {error && <span className='error'>{error}</span>}
                    <div class="info">
              Already have an account? <Link to='/login'>Login</Link> instead.
            </div>
                    </Form>
    );
};

export default SignupForm;
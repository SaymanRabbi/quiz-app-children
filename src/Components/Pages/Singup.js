import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../Styles/Singup.module.css'
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
const Singup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <Form clasName={`${classes.signup}`}>
                <TextInput type='text' placeholder="Enter name" icon="person"/>
                <TextInput type='email' placeholder="Enter Email" icon="alternate_email" />
                   <TextInput type='password' placeholder="Enter password" icon="lock"/>
                    <TextInput type='password' placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms &amp; Cinditions" />
                    <Button> 
                        <span>
                        Submit Now
                        </span>
                    </Button>
                    <div class="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
                    </Form>
            </div>
        </>
    );
};
export default Singup;
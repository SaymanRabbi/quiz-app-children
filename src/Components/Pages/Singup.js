import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../Styles/Singup.module.css'
import TextInput from '../TextInput';
const Singup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <Form clasName={`${classes.signup}`} />
                <TextInput type='text' placeholder="Enter name"/>
            </div>
        </>
    );
};

export default Singup;
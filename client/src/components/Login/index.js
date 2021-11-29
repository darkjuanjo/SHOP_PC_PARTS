import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
function LoginForm({ onClose }) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    const { email, password } = formState;
    function handleChange(e) {
        // This line is subtle. In the variable e.target.name, the 'name' clause does not refer to a varible called name.
        // It refers to the actual name of the current variable; Like wise
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { email, password }
            });
            Auth.login(data.login.token);
            setFormState({
                email: '',
                password: ''
            });
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h1 data-testid="h1tag">Sign in</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor,
                just as class had to be changed to className previously. */}
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} className="my-2" name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" defaultValue={password} className="my-2" name="password" onBlur={handleChange} />
                    </div>
                    <button data-testid="button" type="submit" >Log in</button>
                </form>
                <button onClick={onClose} type="button">Close</button>
                {/* Display error message if there is an error  */}
                {error && <div>Login failed. Incorrect Email or Password.</div>}
                
            </div>
        </div>
    )
}
export default LoginForm;
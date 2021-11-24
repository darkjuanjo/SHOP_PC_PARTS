import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from 'Mutations path';
// import Auth from '../utils/auth';

function LoginForm() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error }] = useMutation(LOGIN_USER);
    const { email, password } = formState;

    function handleChange(e) {
        // This line is subtle. In the variable e.target.name, the 'name' clause does not refer to a varible called name.
        // It refers to the actual name of the current variable; Like wise
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)

        // try {
        //     const { data } = await login({
        //       variables: { ...formState }
        //     });

        //     Auth.login(data.login.token);
        //   } catch (e) {
        //     console.error(e);
        //   }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });

    }

    return (
        <section>
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

            {/* Display error message if there is an error  */}
            {/* {error && <div>Login failed</div>} */}
        </section>
    )
}

export default LoginForm;

// In the handleChange function, we're using the setFormState function to update the formState value for the name property. 
// We assign the value taken from the input field in the UI with e.target.value and assign this value to the property 
// formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
// Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
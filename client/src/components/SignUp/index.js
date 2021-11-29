import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const SignUp = ({ onClose }) => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    const { username, email, password } = formState;

    function handleChange(e) {
        // This line is subtle. In the variable e.target.name, the 'name' clause does not refer to a varible called name.
        // It refers to the actual name of the current variable; Like wise
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState);
    
    try {
      const { data } = await addUser({
        variables: { username, email, password }
      });
      window.alert('Account has been created!');
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    
  };

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Create an account</h3>
                            <form onSubmit={handleFormSubmit}>
              <input
                className="my-1"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={username}
                onChange={handleChange}
              />
              <input
                className="my-1"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
              />
              <input
                className="my-1"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
                <button onClick={onClose} type="button">Close</button>
                {error && <div>Sign up failed. Verify your entries.</div>}
            </div>
        </div>
    );
}

export default SignUp;
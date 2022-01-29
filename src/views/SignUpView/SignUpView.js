import { useState } from "react"
import { useDispatch } from "react-redux";

import { authOperations } from "redux/auth";

export function SignUpView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { target: { name, value } } = e;
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authOperations.signUp({ name, email, password }));
        setName('');
        setEmail(''); 
        setPassword('');
    }

    return (
        <section>
            <h1>This is a Sing In View</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Your name 
                    <input
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Your E-mail
                    <input
                        name='email'
                        value={email}
                        type='email'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Create password
                    <input
                        name='password'
                        value={password}
                        type='password'
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        </section>
    )
}
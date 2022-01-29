import { useState } from "react"
import { useDispatch } from "react-redux";

import { authOperations } from "redux/auth";

export function LogInView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { target: { name, value } } = e;
        
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }))
        setEmail('');
        setPassword('');
    }

    return (
        <section>
            <h1>This is a login view!</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    E-mail
                    <input
                        name='email'
                        value={email}
                        type='email'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        name='password'
                        value={password}
                        type='password'
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>Sign In</button>
            </form>
        </section>
    )
}
import { useState } from "react"
import { useDispatch } from "react-redux";

import { authOperations } from "redux/auth";

import s from './SignUpView.module.scss';

import {Section} from 'components/Section'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
        },
  },
});

export default function SignUpView() {
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
        <Section>
            <h1 className={s.title}>Sign Up</h1>
            <form className={s.form} onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                <TextField
                    label="Your name"
                    size="small"
                    color="primary"
                        name="name"
                        className={s.input}
                    onChange={handleInputChange}
                    />
                </ThemeProvider>
                 <ThemeProvider theme={theme}>
                <TextField
                    label="Your e-mail"
                    type="email"
                    size="small"
                    color="primary"
                        name="email"
                        className={s.input}
                    onChange={handleInputChange}
                    />
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                <TextField
                    label="Your password"
                    type="password"
                    size="small"
                    color="primary"
                        name="password"
                        className={s.input}
                    onChange={handleInputChange}
                    />
                </ThemeProvider>

                <ThemeProvider theme={theme}>
                    <Button
                        className={s.btn}
                variant="contained"
                        size="normal"
                        type="submit"
                color='primary'    
                >Sign Up</Button>
            </ThemeProvider>
            </form>
        </Section>
    )
}
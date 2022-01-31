import { useState } from "react"
import { useDispatch } from "react-redux";

import { authOperations } from "redux/auth";

import { Section } from 'components/Section';
import s from './LogInView.module.scss';

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

export default function LogInView() {
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
        <Section>
            <h1 className={s.title}>Log In</h1>
            <form className={s.form} onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                <TextField
                    label="E-mail"
                    type="email"
                    size="small"
                    color="primary"
                        name="email"
                        margin="normal"
                        value={email}
                    onChange={handleInputChange}
                    />
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                <TextField
                    label="Password"
                    type="password"
                    size="small"
                    color="primary"
                        name="password"
                        margin="normal"
                        value={password}
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
                >Log In</Button>
            </ThemeProvider>
            </form>
        </Section>
    )
}
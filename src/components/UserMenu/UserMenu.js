import { useDispatch, useSelector } from "react-redux"

import { authSelectors, authOperations } from "redux/auth";

import defaultAvatar from './avatar.png';

import s from './UserMenu.module.scss'

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
  },
});

export function UserMenu() {
    const name = useSelector(authSelectors.getName);
    const avatar = defaultAvatar;

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(authOperations.logOut())
    }    
    return (
        <div className={s.UserMenu}>
            <img className={s.avatar} src={avatar} width="30" alt='user avatar'/>
            <span className={s['text']}>Welcome {name}</span>
            <ThemeProvider theme={theme}>
            <Button
                variant="outlined"
                size="small"
                onClick={handleButtonClick}
                color='primary'    
                >Sign Out</Button>
            </ThemeProvider>
        </div>
    )
}
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.scss';

import { Oval } from 'react-loader-spinner';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

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

export  function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAddingContact = useSelector(contactsSelectors.getIsAddingContact);

  const dispatch = useDispatch();

  const addContact = contact => {
    dispatch(contactsOperations.addContact(contact));
  };

  const inputHandler = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s['contact-form']} onSubmit={submitHandler}>
      <ThemeProvider theme={theme}>
      <TextField
          label="Name"
          type="text"
          size="small"
          color="primary"
              name="name"
          margin="dense"
          value={name}
          onChange={inputHandler}
          />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
      <TextField
          label="Number"
          type="tel"
          size="small"
          color="primary"
              name="number"
          margin="dense"
          value={number}
          onChange={inputHandler}
          />
      </ThemeProvider>
      <Button
      className={s.btn}
      variant="contained"
      size="normal"
      type="submit"
      color='primary'    
      >Add contact
      {isAddingContact && (
          <Oval
            ariaLabel="loading-indicator"
            height={12}
            width={12}
            strokeWidth={5}
            color="black"
            secondaryColor="#01579b"
          />
        )}
      </Button>
    </form>
  );
}

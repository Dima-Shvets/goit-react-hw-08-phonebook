// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import s from './Filter.module.scss';

import { contactsActions, contactsSelectors } from 'redux/contacts';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
        },
  },
});

export function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const updateFilter = message =>
    dispatch(contactsActions.updateFilter(message));

  const filterHandler = e => {
    const message = e.target.value;
    updateFilter(message);
  };

  

  return (
    <div className={s.Filter}>
      <ThemeProvider theme={theme}>
      <TextField
          label="Find contacts by name"
          type="text"
          size="small"
          color="primary"
              name="filter"
              margin="normal"
          onChange={filterHandler}
          />
      </ThemeProvider>
      </div>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   updateFilter: PropTypes.func.isRequired,
// };

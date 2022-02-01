// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.scss';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

import Button from '@mui/material/Button';


export function ContactList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.element}>
            {name}: {number}
            <Button
              className={s.btn}
              variant="contained"
              size="small"
              type="submit"
              color='primary'
              onClick={() => deleteContact(id)}        
              >Delete
            </Button>
          </li>
        );
      })}
      </ul>
  );
}

// ContactList.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

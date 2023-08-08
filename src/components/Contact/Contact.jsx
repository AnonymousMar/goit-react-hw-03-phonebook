import PropTypes from 'prop-types'
import css from './Contact.module.css'

export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ul>
            {filteredContacts.map(contact => {
                return (
                    <li key={contact.id} className={css.contactItem}>
                        {contact.name}:&nbsp;<span>{contact.number}</span>
                        <button className={css.deleteButton} type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ), deleteContact: PropTypes.func.isRequired
}
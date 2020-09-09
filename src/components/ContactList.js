import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PropTypes from "prop-types";

const LS_KEY = "react-hw-3";

const ContactList = (props) => {
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(props.contacts));
  }, [props.contacts]);

  return (
    <TransitionGroup component="ul" className="contact-list">
      {props.filter === ""
        ? props.contacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="contact-list__item"
            >
              <ContactListItem
                contactId={contact.id}
                name={contact.name}
                number={contact.number}
                remove={props.remove}
              />
            </CSSTransition>
          ))
        : props.contacts
            .filter((contact) =>
              contact.name.toLowerCase().includes(props.filter.toLowerCase())
            )
            .map((contact) => (
              <CSSTransition
                key={contact.id}
                timeout={250}
                classNames="contact-list__item"
              >
                <ContactListItem
                  key={contact.id}
                  contactId={contact.id}
                  name={contact.name}
                  number={contact.number}
                  remove={props.remove}
                />
              </CSSTransition>
            ))}
    </TransitionGroup>
  );
};

const ContactListItem = ({ contactId, name, number, remove }) => (
  <li className="contact-list__item">
    <div className="contact-list__item--cont">
      <span className="contact-list__item--span">{name}</span>
      <span className="contact-list__item--span">{number}</span>
    </div>

    <button
      className="contact-list__remove"
      onClick={() => {
        remove(contactId);
      }}
    >
      {/* <div className="contact-list__x-left"></div>
      <div className="contact-list__x-right"></div> */}
    </button>
  </li>
);

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  remove: PropTypes.func,
};

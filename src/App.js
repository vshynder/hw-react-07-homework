import React from "react";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Alert from "./components/Alert";
import Loader from "./components/Loading";
import selectors from "./contacts-selectors";
import "./app.scss";

import operations from "./reduxOperations";

import { connect } from "react-redux";
import actions from "./actions";

import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  handleSubmit = ({ name, number }) => {
    if (name.trim() === "" || number.trim() === "") {
      this.handleAlert("Name and number must be provided.");
      return;
    }
    const check = this.props.contacts.find((contact) => contact.name === name);
    check
      ? this.handleAlert("You already have " + name)
      : this.props.onFormSubmit(name, number);
  };

  handleAlert(message) {
    this.props.handleAlertChange(message);
    this.props.handleAlertVisibility(true);
    setTimeout(() => {
      this.props.handleAlertVisibility(false);
    }, 3000);
  }

  componentDidMount() {
    this.props.loadContacts();
    this.props.toggleMounted(true);
  }

  render() {
    return (
      <div className="phonebook">
        <CSSTransition
          in={this.props.isMounted}
          timeout={500}
          classNames="title"
          mountOnEnter
        >
          <h2 className="title">Phonebook</h2>
        </CSSTransition>
        <ContactForm formSubmit={this.handleSubmit} />
        {this.props.contacts.length > 1 ? (
          <Filter
            filterChange={this.props.handleFilter}
            filterVal={this.props.filter}
          />
        ) : null}

        {this.props.isLoading && <Loader />}
        <ContactList
          filter={this.props.filter}
          contacts={this.props.contacts}
          remove={this.props.removeContact}
        />
        <Alert
          isShown={this.props.isAlertShown}
          info={this.props.alertMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isMounted: selectors.getIsMounted(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  isAlertShown: selectors.getAlertShown(state),
  alertMessage: selectors.getAlertMessage(state),
  isLoading: selectors.getLoader(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (name, number) =>
      dispatch(operations.addContact({ name, number })),
    removeContact: (id) => dispatch(operations.removeContact(id)),
    toggleMounted: (value) => dispatch(actions.toggleMounted(value)),
    handleFilter: (e) => dispatch(actions.filter(e.target.value)),
    handleAlertChange: (message) =>
      dispatch(actions.toggleAlertMessage(message)),
    handleAlertVisibility: (value) =>
      dispatch(actions.toggleAlertVisibility(value)),
    loadContacts: () => dispatch(operations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

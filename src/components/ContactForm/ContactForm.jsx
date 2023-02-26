import { Component } from 'react';
import css from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  input = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  submit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.submit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.input('name')}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.inputName}
          />
        </label>
        <label>
          Number
          <input
            value={this.state.number}
            onChange={this.input('number')}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be 5 digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.inputNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

import * as React from 'react';
import Link from '@source/partials/Link';
import { Query } from 'react-apollo';
import Loader from '../../partials/Loader';
import testEmail from '../../helpers/testEmail';
import axios from 'axios';
import gql from 'graphql-tag';

export interface ContactFormProps {
  languageCode?: string;
  data: {
    title: string;
    gdprLink: LooseObject;
  };
}

export interface ContactFormState {
  formValues: {
    name: string;
    email: string;
    message: string;
    agreement: boolean;
  };
  formStatus: string;
  formErrorMessage: string;

  errors: {
    name: string;
    email: string;
    message: string;
  };
}

const GET_CONTEXT = gql`
  {
    pageData @client
  }
`;

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);

    this.state = {
      formStatus: null,
      formErrorMessage: null,
      formValues: {
        name: '',
        email: '',
        message: '',
        agreement: false,
      },
      errors: {
        name: null,
        email: null,
        message: null,
      },
    };
  }

  isValid() {
    let valid = true;

    const newError = { ...this.state.errors };

    Object.keys(newError).forEach((field: string) => {
      if (field === 'agreement') {
        newError[field] = this.state.formValues[field] === false ? 'Tento údaj je povinný' : '';
      }

      if (field === 'email') {
        if (this.state.formValues[field] === '') {
          newError[field] = 'Tento údaj je povinný';
        } else if (this.state.formValues[field] !== '' && !testEmail(this.state.formValues[field])) {
          newError[field] = 'not an email';
        } else {
          newError[field] = '';
        }
      } else {
        newError[field] = this.state.formValues[field] === '' ? 'Tento údaj je povinný' : '';
      }
      if (newError[field] !== '') {
        valid = false;
      }
    });

    this.setState({
      errors: newError,
    });

    return valid;
  }

  toggleAgreement() {
    this.setState({
      ...this.state,
      formValues: { ...this.state.formValues, agreement: !this.state.formValues.agreement },
    });
  }

  changeInputValue = e => {
    const newState = {
      ...this.state,
      formValues: { ...this.state.formValues, [e.target.name]: e.target.value },
    };

    this.setState(newState);
  }

  resetForm = () => {
    this.setState({
      formStatus: null,
      formErrorMessage: null,
      formValues: {
        name: '',
        email: '',
        message: '',
        agreement: false,
      },
      errors: {
        name: null,
        email: null,
        message: null,
      },
    });
  }

  submit = (e, subject) => {
    e.preventDefault();

    if (this.isValid()) {
      let data = new FormData();
      data.append('name', this.state.formValues.name);
      data.append('email', this.state.formValues.email);
      data.append('text', this.state.formValues.message);
      data.append('url', window.location.href);
      data.append('subject', subject);
      data.append('formType', 'contact');

      try {
        axios
          .post(process.env.REACT_APP_SERVER + '/inquiry/upload', data)
          .then(response => {
            this.setState({ ...this.state, formStatus: 'success' });
          })
          .catch(err => this.setState({ ...this.state, formStatus: 'error', formErrorMessage: err.toString() }));
      } catch (e) {
        return this.setState({
          ...this.state,
          formStatus: 'error',
          formErrorMessage: 'Network Problem',
        });
      }
      this.resetForm();
    }
  }

  public render() {
    const { gdprLink, title } = this.props.data;

    const {
      formValues: { name, email, message, agreement },
      errors: { ...errors },
      formStatus,
    } = this.state;

    return (
      <div className={'fullWidthContainer'}>
        <Query query={GET_CONTEXT}>
          {({ data, loading, error }) => {
            if (loading) {
              return <Loader />;
            }

            if (error) {
              return 'Error...';
            }

            const { pageData } = data;

            return (
              <section className={'contactForm form'}>
                <div className={'container'}>
                  <h3 className={'gradientHeading'}>{title}</h3>

                  {
                    <form method={'POST'} onSubmit={(e: any) => this.submit(e, pageData.name)}>
                      <div className={'form__row form__row--first'}>
                        <div>
                          <div className={`form__input active   ${errors.name ? 'error' : ''}`}>
                            <input
                              value={name}
                              type="text"
                              name="name"
                              className={`${this.state.formValues.name ? 'active' : ''}`}
                              onChange={e => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>{errors.name ? errors.name : 'Jméno'}</span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>

                        <div>
                          <div className={`form__input ${errors.email ? 'error' : ''} `}>
                            <input
                              value={email}
                              type="email"
                              name="email"
                              className={`${this.state.formValues.email ? 'active' : ''} `}
                              onChange={e => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>{errors.email ? errors.email : 'E-mail'}</span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>
                      </div>

                      <div className={`form__textarea  ${errors.message ? 'error' : ''} `}>
                        <label>{errors.message ? errors.message : 'Zpráva'}</label>
                        <textarea name="message" onChange={e => this.changeInputValue(e)} value={message} />
                      </div>

                      <div className={'form__terms'}>
                        <div>
                          <input
                            className={'checkbox'}
                            id="styled-checkbox-1"
                            type="checkbox"
                            checked={agreement}
                            onChange={e => this.toggleAgreement()}
                          />
                          <label htmlFor="styled-checkbox-1" />
                        </div>

                        <div>
                          Souhlasím se <Link url={gdprLink && gdprLink.url}>zpracováním osobních</Link> údajů.
                        </div>
                      </div>

                      <div className={'flexRow flexAlign--center'}>
                        <button className="btn--blueBkg" type="submit" disabled={!this.state.formValues.agreement}>
                          Odeslat
                        </button>
                      </div>

                      <div className={'form__messageHolder'}>
                        {formStatus === 'error' && (
                          <div className={'form__message form__message--error'}>
                            <p>There was an error.</p>
                            {this.state.formErrorMessage && <p>{this.state.formErrorMessage}</p>}
                          </div>
                        )}

                        {formStatus === 'success' && (
                          <div className={'form__message form__message--success'}>Thank You for contacting us.</div>
                        )}
                      </div>
                    </form>}
                </div>
              </section>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ContactForm;

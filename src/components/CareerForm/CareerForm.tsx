import * as React from 'react';
import axios from 'axios';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as ReactMarkdown from 'react-markdown';

import Link from '../../partials/Link';
import Loader from '../../partials/Loader';
import SvgIcon from '../../partials/SvgIcon';
import testEmail from '../../helpers/testEmail';

export interface CareerFormProps {
  data: {
    title: string;
    text: string;
    gdprLink?: LooseObject;
  };
}

export interface CareerFormState {
  formStatus: string;
  formErrorMessage: string;
  formValues: {
    location: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    message: string;
    agreement: boolean;
    file: any;
  };

  errors: {
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    message: string;
  };
}

const GET_CONTEXT = gql`
  {
    pageData @client
  }
`;

export default class CareerForm extends React.Component<CareerFormProps, CareerFormState> {
  private fileRef;
  private topRef;

  constructor(props: CareerFormProps) {
    super(props);

    this.state = {
      formStatus: null,
      formErrorMessage: null,
      formValues: {
        location: '',
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        message: '',
        agreement: false,
        file: null,
      },
      errors: {
        firstName: null,
        lastName: null,
        telephone: null,
        email: null,
        message: null,
      },
    };

    this.fileRef = React.createRef();
    this.topRef = React.createRef();
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

    if (!valid) {
      this.scrollToTopRef();
    }

    return valid;
  }

  scrollToTopRef = () => window.scrollTo(0, this.topRef.current.offsetTop);

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
        location: '',
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        message: '',
        agreement: false,
        file: null,
      },
      errors: {
        firstName: null,
        lastName: null,
        telephone: null,
        email: null,
        message: null,
      },
    });
  }

  onChooseFile() {
    if (this.fileRef) {
      this.fileRef.click();
    }
  }

  onChangeFile(e: any) {
    const newState = {
      ...this.state,
      formValues: { ...this.state.formValues, file: e.target.files[0] },
    };
    this.setState(newState);
  }

  submit = (e, subject) => {
    e.preventDefault();

    if (this.isValid()) {
      let data = new FormData();
      data.append('file', this.state.formValues.file);
      data.append('firstname', this.state.formValues.firstName);
      data.append('lastname', this.state.formValues.lastName);
      data.append('telephone', this.state.formValues.telephone);
      data.append('location', this.state.formValues.location);
      data.append('email', this.state.formValues.email);
      data.append('text', this.state.formValues.message);
      data.append('url', window.location.href);
      data.append('subject', subject);
      data.append('formType', 'career');

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
    const { gdprLink, title, text } = this.props.data;

    const {
      formValues: { firstName, lastName, telephone, email, message, agreement, file, location },
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
              <section className={'careerForm form'} ref={this.topRef}>
                <div className={'container'}>
                  <h3 className={'gradientHeading'}>{title}</h3>

                  <ReactMarkdown
                    source={text}
                    renderers={{
                      paragraph: (props: any) => <p>{props.children}</p>,
                    }}
                  />

                  <form method={'POST'} onSubmit={(e: any) => this.submit(e, pageData.name)}>
                    <div className={'form__row form__row--first'}>
                      <div>
                        <div className={`form__input active ${errors.firstName ? 'error' : ''}`}>
                          <input
                            value={firstName}
                            type="text"
                            name="firstName"
                            className={this.state.formValues.firstName ? 'active' : ''}
                            onChange={e => this.changeInputValue(e)}
                          />
                          <span className={'form__input__label'}>{errors.firstName ? errors.firstName : 'Jméno'}</span>
                          <div className={'form__input__bar'} />
                        </div>
                      </div>

                      <div>
                        <div className={`form__input ${errors.lastName ? 'error' : ''} `}>
                          <input
                            value={lastName}
                            type="text"
                            name="lastName"
                            className={this.state.formValues.lastName ? 'active' : ''}
                            onChange={e => this.changeInputValue(e)}
                          />
                          <span className={'form__input__label'}>
                            {errors.firstName ? errors.firstName : 'Příjmení'}
                          </span>
                          <div className={'form__input__bar'} />
                        </div>
                      </div>

                      <div>
                        <div className={`form__input ${errors.telephone ? 'error' : ''} `}>
                          <input
                            value={telephone}
                            type="tel"
                            name="telephone"
                            className={this.state.formValues.telephone ? 'active' : ''}
                            onChange={e => this.changeInputValue(e)}
                          />
                          <span className={'form__input__label'}>
                            {errors.telephone ? errors.telephone : 'Telefon'}
                          </span>
                          <div className={'form__input__bar'} />
                        </div>
                      </div>

                      <div>
                        <div className={`form__input ${errors.email ? 'error' : ''} `}>
                          <input
                            value={email}
                            type="text"
                            name="email"
                            className={this.state.formValues.email ? 'active' : ''}
                            onChange={e => this.changeInputValue(e)}
                          />
                          <span className={'form__input__label'}>{errors.email ? errors.email : 'E-mail'}</span>
                          <div className={'form__input__bar'} />
                        </div>
                      </div>
                    </div>

                    <div className={'form__row form__row--second'}>
                      <div className={'form__selectInput'}>
                        <select
                          onChange={e => this.changeInputValue(e)}
                          value={location}
                          name="location"
                          defaultValue={''}
                        >
                          <option value={''} disabled={true}>
                            Lokalita kde chcete pracovat
                          </option>
                          <option value={'1'}>1</option>
                          <option value={'2'}>2</option>
                          <option value={'3'}>3</option>
                          <option value={'4'}>4</option>
                        </select>

                        <div className={'form__input__bar'} />
                      </div>

                      <div className={'form__inputBtn'}>
                        <button
                          onClick={e => {
                            e.preventDefault();
                            this.onChooseFile();
                          }}
                        >
                          Nahrát životopis
                          <span>
                            <SvgIcon name="download" />
                          </span>
                        </button>

                        <input
                          type="file"
                          name="file"
                          ref={ref => (this.fileRef = ref)}
                          onChange={e => this.onChangeFile(e)}
                          style={{ display: 'none' }}
                        />

                        <div className={'form__input__bar'} />
                        {file && file.name && <p>{file.name}</p>}
                      </div>
                    </div>

                    <div className={`form__textarea  ${errors.message ? 'error' : ''} `}>
                      <label>{errors.message ? errors.message : 'Průvodní dopis'}</label>
                      <textarea name="message" onChange={e => this.changeInputValue(e)} value={message} />
                    </div>

                    <div 
                      className={'form__messageHolder'} 
                      style={formStatus !== null ? { padding: '4rem 0' } : {}}
                    >
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
                        Souhlasím se <Link {...gdprLink}>zpracováním osobních</Link> údajů.
                      </div>
                    </div>

                    <div className={'flexRow flexAlign--center'}>
                      <button className="btn--blueBkg" type="submit" disabled={!this.state.formValues.agreement}>
                        Odeslat
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            );
          }}
        </Query>
      </div>
    );
  }
}

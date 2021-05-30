import * as React from 'react';
import axios from 'axios';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Link from '../../partials/Link';
import Loader from '../../partials/Loader';
import testEmail from '../../helpers/testEmail';
import readEnvVariable from '../../helpers/readEnvVariable';
import ModalWindow from '../../partials/ModalWindow';
import Select from '../../partials/Select';

const REACT_APP_REST_API_URL = readEnvVariable('REACT_APP_REST_API_URL');

export interface ExaminationFormProps {
  languageCode?: string;
  data: {
    examinationList: string;
    examinationSpecificationList: string;
    gdprLink: LooseObject;
    enableModal: boolean;
    modalTextBig: string;
    modalTextSmall: string;
  };
}

export interface ExaminationFormState {
  formValues: {
    center: string;
    examinationType: string;
    examinationSpecific: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
  };
  formStatus: string;
  formErrorMessage: string;

  errors: {
    center: string;
    examinationType: string;
    examinationSpecific: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
}

const GET_CONTEXT = gql`
  {
    pageData @client
    languageData @client
  }
`;

class ExaminationForm extends React.Component<ExaminationFormProps, ExaminationFormState> {
  constructor(props: ExaminationFormProps) {
    super(props);

    this.state = {
      formStatus: null,
      formErrorMessage: null,
      formValues: {
        center: '',
        examinationType: '',
        examinationSpecific: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: false,
      },
      errors: {
        center: null,
        examinationType: null,
        examinationSpecific: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
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
        center: '',
        examinationType: '',
        examinationSpecific: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: false,
      },
      errors: {
        center: null,
        examinationType: null,
        examinationSpecific: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        message: null,
      },
    });
  }

  submit = (e, subject) => {
    e.preventDefault();

    if (this.isValid()) {
      let data = new FormData();
      data.append('center', this.state.formValues.center);
      data.append('examinationType', this.state.formValues.examinationType);
      data.append('examinationSpecific', this.state.formValues.examinationSpecific);
      data.append('firstName', this.state.formValues.firstName);
      data.append('lastName', this.state.formValues.lastName);
      data.append('email', this.state.formValues.email);
      data.append('phone', '-');
      data.append('text', this.state.formValues.message);
      data.append('url', window.location.href);
      data.append('subject', subject);
      data.append('formType', 'examination');

      try {
        // axios
        //   .post(REACT_APP_REST_API_URL + '/inquiry/upload', data)
        //   .then(response => {
        //     this.setState({ ...this.state, formStatus: 'success' });
        //   })
        //   .catch(err => {
        //     this.setState({ ...this.state, formStatus: 'error', formErrorMessage: err.toString() });
        //   });
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

  handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>, name: string) {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [name]: event.target.value
      }
    });
  }

  getList(list: string) {
    return list ? list.split('\n') : [''];
  }

  public render() {
    const {
      examinationList, examinationSpecificationList, gdprLink, enableModal, modalTextBig, modalTextSmall
    } = this.props.data;

    const {
      formValues: {
        center, examinationType, examinationSpecific, firstName, lastName, email, phone, message, agreement
      },
      errors: { ...errors },
      formStatus,
    } = this.state;

    return (
      <div className={'fullWidthContainer'}>
        <Query query={GET_CONTEXT}>
          {({
            data,
            loading,
            // error
          }) => {
            if (loading) {
              return <Loader />;
            }

            // if (error) {
            //   return `Error...${error}`;
            // }

            const { pageData, languageData } = data;
            const { code } = languageData;

            return (
              <section className={'examinationForm form'}>
                <div className={'container'}>
                  <h3 className={'gradientHeading'}>Objednejte se</h3>

                  {
                    <form method={'POST'} onSubmit={(e: LooseObject) => this.submit(e, pageData.name)}>
                      <div className={'form__row'}>
                        <div className={'short'}>
                          <div className={'form__input'}>
                            <Select
                              value={this.state.formValues.center}
                              className={`${this.state.formValues.center ? 'active' : ''}`}
                              onChange={e => this.handleChangeSelect(e, 'center')}
                              defaultValue={'Pracoviště'}
                              items={['Budějovická', 'Vysočany']}
                            />
                            {errors.center
                            && <div className={`form__textarea ${errors.center ? 'error' : ''} `}>
                              <label>{errors.center ? errors.center : ''}</label>
                            </div>}
                          </div>
                        </div>

                        <div className={'short'}>
                          <div className={'form__input'}>
                            <Select
                              value={this.state.formValues.examinationType}
                              className={`${this.state.formValues.center ? 'active' : ''}`}
                              onChange={e => this.handleChangeSelect(e, 'examinationType')}
                              defaultValue={'Typ vyšetření'}
                              items={this.getList(examinationList)}
                            />
                            {errors.examinationType
                            && <div className={`form__textarea ${errors.examinationType ? 'error' : ''} `}>
                              <label>{errors.examinationType ? errors.examinationType : ''}</label>
                            </div>}
                          </div>
                        </div>

                        <div className={'long'}>
                          <div className={'form__input'}>
                            <Select
                              value={this.state.formValues.examinationSpecific}
                              className={'long'}
                              onChange={e => this.handleChangeSelect(e, 'examinationSpecific')}
                              defaultValue={'Část k vyšetření'}
                              items={this.getList(examinationSpecificationList)}
                            />
                            {errors.examinationSpecific
                            && <div className={`form__textarea ${errors.examinationSpecific ? 'error' : ''} `}>
                              <label>{errors.examinationSpecific ? errors.examinationSpecific : ''}</label>
                            </div>}
                          </div>
                        </div>

                        <div className={'short'}>
                          <div className={`form__input ${errors.firstName ? 'error' : ''}`}>
                            <input
                              value={firstName}
                              type="text"
                              name="firstName"
                              className={`${this.state.formValues.firstName ? 'active' : ''}`}
                              onChange={(e) => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>
                              {errors.firstName ? errors.firstName : 'Křesní jméno'}
                            </span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>

                        <div className={'short'}>
                          <div className={`form__input ${errors.lastName ? 'error' : ''}`}>
                            <input
                              value={lastName}
                              type="text"
                              name="lastName"
                              className={`${this.state.formValues.lastName ? 'active' : ''}`}
                              onChange={(e) => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>
                              {errors.lastName ? errors.lastName : 'Příjmení'}
                            </span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>

                        <div className={'short'}>
                          <div className={`form__input ${errors.email ? 'error' : ''} `}>
                            <input
                              value={email}
                              type="email"
                              name="email"
                              className={`${this.state.formValues.email ? 'active' : ''} `}
                              onChange={(e) => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>{errors.email ? errors.email : 'E-mail'}</span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>

                        <div className={'short'}>
                          <div className={`form__input ${errors.phone ? 'error' : ''} `}>
                            <input
                              value={phone}
                              type="text"
                              name="phone"
                              className={`${this.state.formValues.email ? 'active' : ''} `}
                              onChange={(e) => this.changeInputValue(e)}
                            />
                            <span className={'form__input__label'}>{errors.phone ? errors.phone : 'Telefon'}</span>
                            <div className={'form__input__bar'} />
                          </div>
                        </div>
                      </div>

                      <div className={`form__textarea ${errors.message ? 'error' : ''} `}>
                        <label>{errors.message ? errors.message : 'Poznámka'}</label>
                        <textarea name="message" onChange={(e) => this.changeInputValue(e)} value={message} />
                      </div>

                      <div className={'form__messageHolder'} style={formStatus !== null ? { padding: '4rem 0' } : {}}>
                        {formStatus === 'error' && (
                          <div className={'form__message form__message--error'}>
                            <p>
                              {code === 'en' ? 'There was an error.' : 'Během odesílání formuláře se vyskytla chyba.'}
                            </p>
                            {this.state.formErrorMessage && <p>{this.state.formErrorMessage}</p>}
                          </div>
                        )}

                        {formStatus === 'success' && !enableModal && (
                          <div className={'form__message form__message--success'}>
                            {code === 'en'
                              ? 'Thank You for contacting us.'
                              : 'Děkujeme za odeslání formuláře. Brzy se Vám ozveme.'}
                          </div>
                        )}
                      </div>

                      <div className={'form__terms'}>
                        <div>
                          <input
                            className={'checkbox'}
                            id="styled-checkbox-1"
                            type="checkbox"
                            checked={agreement}
                            onChange={(e) => this.toggleAgreement()}
                          />
                          <label htmlFor="styled-checkbox-1" />
                        </div>

                        <div>
                          Souhlasím se <Link {...gdprLink}>zpracováním osobních</Link> údajů.
                        </div>
                      </div>

                      <div className={'flexRow flexAlign--center'}>
                        <button className="btn btn--blueBkg" type="submit" disabled={!this.state.formValues.agreement}>
                          Odeslat
                        </button>
                      </div>
                    </form>
                  }
                  {enableModal && this.state.formStatus === 'success' && (
                    <ModalWindow textBig={modalTextBig} textSmall={modalTextSmall} />
                  )}
                </div>
              </section>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ExaminationForm;

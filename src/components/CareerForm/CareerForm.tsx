import * as React from 'react';
import Button from '../../partials/Button';

export interface CareerFormProps {}

export interface CareerFormState {
  formValues: {
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    message: string;
  };
}

export default class CareerForm extends React.Component<CareerFormProps, CareerFormState> {
  constructor(props: CareerFormProps) {
    super(props);

    this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        message: '',
      },
    };
  }

  changeInputValue = e => {
    this.setState({
      formValues: { ...this.state.formValues, [e.target.name]: e.target.value },
    });
  }

  public render() {
    return (
      <div className={'fullWidthContainer'}>
        <section className={'careerForm form'}>
          <div className={'container'}>
            <h3 className={'gradientHeading'}>Nenašli jste pozici, kterou hledáte</h3>

            <p>
              Máte-li zájem o práci u nás, <strong>vyplňte formulář</strong> a my vás zařadíme do databáze zájemců.
            </p>

            <form>
              <div className={'form__row form__row--first'}>
                <div>
                  <div className={'form__input active'}>
                    <input
                      type="text"
                      name="firstName"
                      className={this.state.formValues.firstName ? 'active' : ''}
                      onChange={e => this.changeInputValue(e)}
                    />
                    <span className={'form__input__label'}>Jméno</span>
                    <div className={'form__input__bar'} />
                  </div>
                </div>

                <div>
                  <div className={'form__input'}>
                    <input
                      type="text"
                      name="lastName"
                      className={this.state.formValues.lastName ? 'active' : ''}
                      onChange={e => this.changeInputValue(e)}
                    />
                    <span className={'form__input__label'}>Příjmení</span>
                    <div className={'form__input__bar'} />
                  </div>
                </div>

                <div>
                  <div className={'form__input'}>
                    <input
                      type="tel"
                      name="telephone"
                      className={this.state.formValues.telephone ? 'active' : ''}
                      onChange={e => this.changeInputValue(e)}
                    />
                    <span className={'form__input__label'}>Telefon</span>
                    <div className={'form__input__bar'} />
                  </div>
                </div>

                <div>
                  <div className={'form__input'}>
                    <input
                      type="email"
                      name="email"
                      className={this.state.formValues.email ? 'active' : ''}
                      onChange={e => this.changeInputValue(e)}
                    />
                    <span className={'form__input__label'}>E-mail</span>
                    <div className={'form__input__bar'} />
                  </div>
                </div>
              </div>

              <div className={'form__row form__row--second'}>
                <div className={'form__selectInput'}>
                  <select>
                    <option>Lokalita kde chcete pracovat</option>
                  </select>

                  <div className={'form__input__bar'} />
                </div>

                <div className={'form__inputBtn'}>
                  <button>  
                    Nahrát životopis
                    <span>  
                      <svg
                        enableBackground="new 0 0 353.7 386.4"
                        viewBox="0 0 353.7 386.4"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m340.7 360.3h-327.7c-7.2 0-13 5.8-13 13s5.8 13 13 13h327.7c7.2 0 13-5.8 13-13s-5.8-13-13-13z" />
                        <path d="m307.7 105.8l-109.1-97.5c-12.4-11.1-31-11.1-43.4 0l-109.2 97.5c-5.4 4.8-5.8 13-1 18.4s13 5.8 18.4 1l100.5-89.8v252.6c0 7.2 5.8 13 13 13s13-5.8 13-13v-252.5l100.5 89.8c2.5 2.2 5.6 3.3 8.7 3.3 3.6 0 7.1-1.5 9.7-4.4 4.8-5.3 4.3-13.6-1.1-18.4z" />
                      </svg>
                    </span>
                  </button>

                  <div className={'form__input__bar'} />
                </div>
              </div>

              <div className={'form__textarea'}>
                <label>Průvodní dopis</label>
                <textarea name="message" onChange={e => this.changeInputValue(e)} />
              </div>

              <div className={'form__terms'}>
                <div>
                  <input className={'checkbox'} id="styled-checkbox-1" type="checkbox" />
                  <label htmlFor="styled-checkbox-1" />
                </div>

                <div>
                  Souhlasím se <a href={''}>zpracováním osobních</a> údajů.
                </div>
              </div>

              <div className={'flexRow flexAlign--center'}>
                <Button classes="btn--blueBkg">Odeslat</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

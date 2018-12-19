import * as React from 'react';
import Button from '../../partials/Button';
import SvgIcon from '../../partials/SvgIcon';
import ReactMarkdown from 'react-markdown';

export interface CareerFormProps {
  data: {
    title: string;
    text: string;
    gdprLink: string;
  };
}

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
  };

  public render() {
    const { gdprLink, title, text } = this.props.data;

    return (
      <div className={'fullWidthContainer'}>
        <section className={'careerForm form'}>
          <div className={'container'}>
            <h3 className={'gradientHeading'}>{title}</h3>

            <ReactMarkdown
              source={text}
              renderers={{
                paragraph: (props: any) => <p>{props.children}</p>,
              }}
            />

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
                      <SvgIcon name="download" />  
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
                  Souhlasím se <a href={gdprLink}>zpracováním osobních</a> údajů.
                </div>
              </div>

              <div className={'flexRow flexAlign--center'}>
                <Button classes="btn--blueBkg btn--fullWidth">Odeslat</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

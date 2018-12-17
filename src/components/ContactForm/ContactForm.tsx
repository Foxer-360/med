import * as React from 'react';
import Button from '../../partials/Button';

export interface ContactFormProps {
  data: {
    title: string;
    gdprLink: string;
  };
}

export interface ContactFormState {
  formValues: {
    name: string;
    email: string;
    message: string;
  };
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);

    this.state = {
      formValues: {
        name: '',
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
    const { gdprLink, title } = this.props.data;
    return (
      <div className={'fullWidthContainer'}>
        <section className={'contactForm form'}>
          <div className={'container'}>
            <h3 className={'gradientHeading'}>{title}</h3>

            <form>
              <div className={'form__row form__row--first'}>
                <div>
                  <div className={'form__input active'}>
                    <input
                      type="text"
                      name="name"
                      className={this.state.formValues.name ? 'active' : ''}
                      onChange={e => this.changeInputValue(e)}
                    />
                    <span className={'form__input__label'}>Jméno</span>
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

              <div className={'form__textarea'}>
                <label>Zpráva</label>
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
                <Button classes="btn--blueBkg">Odeslat</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactForm;

import * as React from 'react';

export interface TemporaryPopupProps {}

export interface TemporaryPopupState {
  active: boolean;
  text: string;
}

export default class TemporaryPopup extends React.Component<TemporaryPopupProps, TemporaryPopupState> {
  constructor(props: TemporaryPopupProps) {
    super(props);

    this.state = {
      active: true,
      // tslint:disable-next-line:max-line-length
      text: 'Vážení návštěvníci, právě jste se dostali na vývojovou verzi webu a informace na něm mohou být neúplné a nepřesné. Tato verze webu slouží pouze pro pracovní účely marketingu a nelze podle něj vyvozovat žádné informace. Pokud chcete získat informace o našich provozech, prosím přejděte na: '
    };
  }

  close = () => {
    this.setState({
      active: !this.state.active,
    });
  }
 
  public render() {
    return (
      <div className={`temporaryPopup ${this.state.active ? '' : 'temporaryPopup--disabled'} `}>
        <i className={'temporaryPopup__close'} onClick={this.close}/>
        <p>
          {this.state.text}
          <a href="http://www.mediconas.cz/">mediconas.cz</a>.
          Děkujeme.
        </p>
      </div>
    );
  }
}
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MedicalGroupProps {}

export interface MedicalGroupState {
  activeIndex: number;
  listHeight: number;
}

class MedicalGroup extends React.Component<MedicalGroupProps, MedicalGroupState> {
  public list: any;

  constructor(props: MedicalGroupProps) {
    super(props);
    this.list = React.createRef();

    this.state = {
      activeIndex: null,
      listHeight: 0,
    };
  }

  handleItemClick = (index: number) => {
    if (this.state.activeIndex === index) {
      this.setState({
        activeIndex: null,
      });
    } else {
      this.setState({
        activeIndex: index,
      });
    }
  }

  componentDidMount() {
    let listHeight = this.list.current.getBoundingClientRect().height + 60;

    this.setState({
      listHeight: listHeight,
    });
  }

  public render() {
    let items = [
      {
        name: 'MEDICON a.s.',
        description: 'poskytovatel ambulantní péče',
        text:
          'IČ: 284 63 293, se sídlem Praha 4, Antala Staška 1670/80, PSČ 140 46, zápis v OR vedeném u Městského soudu v Praze, oddíl B, vložka 14685',
      },
      {
        name: 'MEDICON a.s.',
        description: 'poskytovatel ambulantní péče',
        text:
          'IČ: 284 63 293, se sídlem Praha 4, Antala Staška 1670/80, PSČ 140 46, zápis v OR vedeném u Městského soudu v Praze, oddíl B, vložka 14685',
      },
      {
        name: 'MEDICON a.s.',
        description: 'poskytovatel ambulantní péče',
        text:
          'IČ: 284 63 293, se sídlem Praha 4, Antala Staška 1670/80, PSČ 140 46, zápis v OR vedeném u Městského soudu v Praze, oddíl B, vložka 14685',
      },
    ];

    return (
      <div className={'container'}>
        <section className={'medicalGroup'}>
          <h4>součásti skupiny medicon jsou tyto společnosti</h4>

          <div
            className={'medicalGroup__list'}
            ref={this.list}
            style={{ height: this.state.listHeight > 0 && this.state.listHeight }}
          >
            <ul>
              {items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`medicalGroup__list__item ${this.state.activeIndex === index ? 'active' : ''}`}
                    onClick={() => this.handleItemClick(index)}
                  >
                    <p className={'medicalGroup__list__item__title'}>
                      <span>{item.name}</span> - <span>{item.description}</span>
                    </p>

                    <div className={'medicalGroup__list__item__text'}>
                      {item.text && (
                        <ReactMarkdown
                          source={item.text}
                          renderers={{
                            paragraph: (props: any) => <p>{props.children}</p>,
                          }}
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default MedicalGroup;

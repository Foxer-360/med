import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MedicalGroupProps {
  data: {
    title: string;
    companies: [
      {
        name: string;
        subtitle: string;
        text: string;
      }
    ];
  };
}

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
  };

  componentDidMount() {
    let listHeight = this.list.current.getBoundingClientRect().height + 120;

    this.setState({
      listHeight: listHeight,
    });
  }

  public render() {
    const { companies, title } = this.props.data;

    return (
      <div className={'container'}>
        <section className={'medicalGroup'}>
          {title && <h4>součásti skupiny medicon jsou tyto společnosti</h4>}

          <div
            className={'medicalGroup__list'}
            ref={this.list}
            style={{ height: this.state.listHeight > 0 && this.state.listHeight }}
          >
            <ul>
              {companies &&
                companies.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`medicalGroup__list__item ${this.state.activeIndex === index ? 'active' : ''}`}
                      onClick={() => this.handleItemClick(index)}
                    >
                      <p className={'medicalGroup__list__item__title'}>
                        <span>{item.name}</span> - <span>{item.subtitle}</span>
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

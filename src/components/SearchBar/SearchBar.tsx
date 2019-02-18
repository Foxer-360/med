import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Media from '@source/partials/Media';
import List from '@source/components/List';
import { doctorcard } from '@source/services/components/resources';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
  doctorSearchResults?: LooseObject;
  blogSearchResults?: LooseObject;
}

export interface SearchBarState {
  focused: boolean;
  query: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  public searchBar: any;

  constructor(props: SearchBarProps) {
    super(props);
    this.searchBar = React.createRef();

    this.state = { focused: false, query: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  changeSearchQuery = query => {
    this.setState({
      query: query,
    });
  }

  handleClick(e: LooseObject) {
    if (this.searchBar.current.contains(e.target)) {
      return;
    } else {
      this.changeSearchQuery('');
    }
  }

  public render() {
    const { placeholder, barColor } = this.props;

    return (
      <div
        className={`searchBar ${this.state.focused ? 'searchBar--focused' : ''} searchBar--${barColor}`}
        ref={this.searchBar}
      >
        <div className={'searchBar__input'}>
          <input
            type="text"
            placeholder={placeholder}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleFocus()}
            onChange={e => this.changeSearchQuery(e.target.value)}
            value={this.state.query}
          />
          <SvgIcon name={'search'} type={barColor} />
        </div>

        <div className={`searchBar__bar`} />

        <div className={`searchBarResults ${this.state.query.length !== 0 ? 'active' : ''}`}>
          {this.props.doctorSearchResults && (
            <List data={this.props.doctorSearchResults}>
              {({ data }) => {
                if (data) {
                  return (
                    <ul className={'searchBarResults__doctors'}>
                      {data.map((doctor, i) => (
                        <li className={doctor.active ? 'active' : ''} key={i}>
                          <span>
                            <p>{doctor.name}</p>
                            <p>{doctor.speciality}</p>
                          </span>
                          <span>{doctor.clinic}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
              }}
            </List>
          )}

          <hr />

          {this.props.blogSearchResults && (
            <List data={this.props.blogSearchResults}>
              {({ data }) => {
                if (data) {
                  return (
                    <ul className={'searchBarResults__blog'}>
                      {data.length > 0 && <label>Blog:</label>}
                      {data.map((blogItem, i) => (
                        <li key={i}>
                          <div>{blogItem.image && <Media type="" data={blogItem.image} />}</div>

                          <div>
                            <h4>{blogItem.title}</h4>
                            <p>{blogItem.perex}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  );
                }
              }}
            </List>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;

import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
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
          <ul className={'searchBarResults__doctors'}>
            <li className={'active'}>
              <span>
                <p>Mudr. Emilio Soukup</p>
                <p>Alergologie</p>
              </span>
              <span>Poliklinika Budějovická</span>
            </li>
            <li className={''}>
              <span>
                <p>Mudr. Emilio Soukup</p>
                <p>Alergologie</p>
              </span>
              <span>Poliklinika Budějovická</span>
            </li>

            <li className={''}>
              <span>
                <p>Mudr. Emilio Soukup</p>
                <p>Alergologie</p>
              </span>
              <span>Poliklinika Budějovická</span>
            </li>
          </ul>

          <hr />

          <ul className={'searchBarResults__blog'}>
            <label>Blog:</label>

            <li>
              <div>
                <img />
              </div>

              <div>
                <h4>Alergologie</h4>
                <p>Netus consectetur commodo eget malesuada sem habitant elit id a etiam mauris class lacus.</p>
              </div>
            </li>

            <li>
              <div>
                <img />
              </div>

              <div>
                <h4>Alergologie</h4>
                <p>Netus consectetur commodo eget malesuada sem habitant elit id a etiam mauris class lacus.</p>
              </div>
            </li>

            <li>
              <div>
                <img />
              </div>

              <div>
                <h4>Alergologie</h4>
                <p>Netus consectetur commodo eget malesuada sem habitant elit id a etiam mauris class lacus.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;

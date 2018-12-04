import * as React from 'react';
import SearchIcon from '../../partials/Svg/SearchIcon';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
}

export interface SearchBarState {}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { placeholder, barColor } = this.props;
    return (
      <div className={'searchBar'}>
        <div className={'searchBar__input'}>
          <input type="text" placeholder={placeholder} />
          <SearchIcon name={'lightBlue'} />
        </div>

        <div className={`searchBar__bar searchBar__bar--${barColor}`} />
      </div>
    );
  }
}

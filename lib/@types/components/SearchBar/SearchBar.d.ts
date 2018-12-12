import * as React from 'react';
export interface SearchBarProps {
    placeholder: string;
    barColor: string;
}
export interface SearchBarState {
    focused: boolean;
}
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    searchBar: any;
    constructor(props: SearchBarProps);
    handleFocus: () => void;
    render(): JSX.Element;
}
export default SearchBar;

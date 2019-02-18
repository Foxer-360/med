import * as React from 'react';
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
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    searchBar: any;
    constructor(props: SearchBarProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleFocus: () => void;
    changeSearchQuery: (query: any) => void;
    handleClick(e: LooseObject): void;
    render(): JSX.Element;
}
export default SearchBar;

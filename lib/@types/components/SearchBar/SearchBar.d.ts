import * as React from 'react';
export interface SearchBarProps {
    placeholder: string;
    barColor: string;
}
export interface SearchBarState {
}
export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps);
    render(): JSX.Element;
}

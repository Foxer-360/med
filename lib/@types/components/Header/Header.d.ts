import * as React from 'react';
export interface HeaderProps {
}
export interface HeaderState {
    vX: number;
    menuActive: boolean;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    headerWrapper: any;
    constructor(props: HeaderProps);
    getVertex: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Header;

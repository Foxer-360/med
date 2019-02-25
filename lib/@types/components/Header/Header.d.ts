import * as React from 'react';
export interface HeaderProps {
    navigations?: LooseObject;
    languages?: LooseObject;
    languageCode?: string;
}
export interface HeaderState {
    vX: number;
    menuActive: boolean;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    logo: any;
    constructor(props: HeaderProps);
    closeMenu: () => void;
    toggleMenu: () => void;
    getVertex(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Header;

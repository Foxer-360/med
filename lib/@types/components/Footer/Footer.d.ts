import * as React from 'react';
import Link from '../../partials/Link';
interface Link {
    text: string;
    url: string;
}
interface Icon {
    name: string;
    url: string;
}
export interface FooterProps {
    data: {
        links: Link[];
        social: string;
        socialIcons: Icon[];
        company: string;
        url: string;
        text: string;
    };
}
export interface FooterState {
}
declare class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps);
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Footer;

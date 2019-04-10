import * as React from 'react';
interface Item {
    title: string;
    description: string;
}
export interface FaqProps {
    data: {
        items: Item[];
    };
}
interface FaqState {
    numberOfPage: number;
}
export default class Faq extends React.Component<FaqProps, FaqState> {
    constructor(props: FaqProps);
    render(): JSX.Element;
}
export {};

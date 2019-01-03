import * as React from 'react';
export interface BlogProps {
    languageCode?: string;
    data: {
        title: string;
        displaySearch: boolean;
    };
}
export interface BlogState {
}
export default class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: BlogProps);
    render(): JSX.Element;
}

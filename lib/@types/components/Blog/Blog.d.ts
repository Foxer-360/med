import * as React from 'react';
export interface BlogProps {
    languageCode?: string;
    data: {
        title: string;
        displaySearch: boolean;
    };
}
export interface BlogState {
    numberOfPage: number;
    searchQuery: string;
}
export default class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: BlogProps);
    onSearchChange: (e: any) => void;
    render(): JSX.Element;
    private mapArticleToContent;
}

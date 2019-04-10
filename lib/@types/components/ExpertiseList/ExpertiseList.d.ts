import * as React from 'react';
interface Expertise {
    title: string;
    url: LooseObject;
    image: LooseObject;
}
export interface ExpertiseListProps {
    languageCode?: string;
    data: {
        title: string;
        expertiseList: Expertise[];
    };
}
interface ExpertiseListState {
    numberOfPage: number;
}
export default class ExpertiseList extends React.Component<ExpertiseListProps, ExpertiseListState> {
    constructor(props: ExpertiseListProps);
    render(): JSX.Element;
}
export {};

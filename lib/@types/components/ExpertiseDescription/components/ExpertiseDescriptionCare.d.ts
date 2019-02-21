import * as React from 'react';
export interface ExpertiseDescriptionCareProps {
    title: string;
    firstText: string;
    secondText: string;
    hideBtn: string;
    showHiddenText: boolean;
}
export interface ExpertiseDescriptionCareState {
    showHiddenText: boolean;
}
export default class ExpertiseDescriptionCare extends React.Component<ExpertiseDescriptionCareProps, ExpertiseDescriptionCareState> {
    constructor(props: ExpertiseDescriptionCareProps);
    componentWillReceiveProps(nextProps: ExpertiseDescriptionCareProps): void;
    render(): JSX.Element;
}

import * as React from 'react';
export interface ExaminationProps {
    title: string;
    description: string;
    lastLong: boolean;
}
export interface ExaminationState {
    isDescriptionVisible: boolean;
}
declare class Examination extends React.Component<ExaminationProps, ExaminationState> {
    constructor(props: ExaminationProps);
    render(): JSX.Element;
}
export default Examination;

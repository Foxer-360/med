import * as React from 'react';
export interface ExpertiseDescriptionExaminationProps {
    title: string;
    examinations: Array<any>;
}
export interface ExpertiseDescriptionExaminationState {
}
declare class ExpertiseDescriptionExamination extends React.Component<ExpertiseDescriptionExaminationProps, ExpertiseDescriptionExaminationState> {
    constructor(props: ExpertiseDescriptionExaminationProps);
    render(): JSX.Element;
}
export default ExpertiseDescriptionExamination;

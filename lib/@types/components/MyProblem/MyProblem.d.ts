import * as React from 'react';
interface Specialization {
    name: string;
    head: boolean;
    belly: boolean;
    arm: boolean;
    legs: boolean;
    feet: boolean;
    body: boolean;
}
export interface MyProblemProps {
}
export interface MyProblemState {
    area: string;
    availableSpecializations: Specialization[];
}
declare class MyProblem extends React.Component<MyProblemProps, MyProblemState> {
    constructor(props: MyProblemProps);
    clickArea: (area: string) => void;
    closeInfoBox: () => void;
    render(): JSX.Element;
}
export default MyProblem;

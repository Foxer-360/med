import * as React from 'react';
export interface MyProblemProps {
}
export interface MyProblemState {
    area: string;
}
declare class MyProblem extends React.Component<MyProblemProps, MyProblemState> {
    constructor(props: MyProblemProps);
    clickArea: (area: string) => void;
    closeInfoBox: () => void;
    render(): JSX.Element;
}
export default MyProblem;

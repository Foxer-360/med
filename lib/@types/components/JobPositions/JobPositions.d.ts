import * as React from 'react';
interface Position {
    name: string;
    url: LooseObject;
    polyclinic: string;
    image: LooseObject;
}
export interface JobPositionsState {
    numberOfPage: number;
}
export interface JobPositionsProps {
    languageCode?: string;
    data: {
        title: string;
        positions: Position[];
    };
}
declare class JobPositions extends React.Component<JobPositionsProps, JobPositionsState> {
    constructor(props: JobPositionsProps);
    render(): JSX.Element;
}
export default JobPositions;

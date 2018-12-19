/// <reference types="react" />
interface Position {
    name: string;
    url: string;
    polyclinic: string;
    image: LooseObject;
}
export interface JobPositionsProps {
    data: {
        title: string;
        positions: Position[];
    };
}
declare const JobPositions: (props: JobPositionsProps) => JSX.Element;
export default JobPositions;

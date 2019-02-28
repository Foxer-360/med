/// <reference types="react" />
interface Position {
    name: string;
    url: LooseObject;
    polyclinic: string;
    image: LooseObject;
}
export interface JobPositionsProps {
    languageCode?: string;
    data: {
        title: string;
        positions: Position[];
    };
}
declare const JobPositions: (props: JobPositionsProps) => JSX.Element;
export default JobPositions;

/// <reference types="react" />
interface Polyclinic {
    url: string;
    image: LooseObject;
}
export interface PolyclinicBoxesProps {
    data: {
        title: string;
        polyclinics: Polyclinic[];
    };
}
declare const PolyclinicBoxes: (props: PolyclinicBoxesProps) => JSX.Element;
export default PolyclinicBoxes;

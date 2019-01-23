/// <reference types="react" />
interface Polyclinic {
    url: LooseObject;
    image: LooseObject;
}
export interface PolyclinicBoxesProps {
    languageCode?: string;
    data: {
        title: string;
        polyclinics: Polyclinic[];
    };
}
declare const PolyclinicBoxes: (props: PolyclinicBoxesProps) => JSX.Element;
export default PolyclinicBoxes;

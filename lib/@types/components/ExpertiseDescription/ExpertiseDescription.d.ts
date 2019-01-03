/// <reference types="react" />
interface Examination {
    title: string;
    url: string;
}
interface Box {
    title: string;
    url: string;
    image: LooseObject;
}
export interface DescriptionProps {
    data: {
        titleCare: string;
        text: string;
        titleExamination: string;
        examinations: Examination[];
        boxes: Box[];
    };
}
declare const Description: (props: DescriptionProps) => JSX.Element;
export default Description;

/// <reference types="react" />
interface Examination {
    title: string;
    url: LooseObject;
    description: string;
}
interface Box {
    title: string;
    url: LooseObject;
    image: LooseObject;
}
export interface DescriptionProps {
    data: {
        titleCare: string;
        firstText: string;
        secondText: string;
        titleExamination: string;
        examinations: Examination[];
        boxes: Box[];
    };
}
declare const Description: (props: DescriptionProps) => JSX.Element;
export default Description;

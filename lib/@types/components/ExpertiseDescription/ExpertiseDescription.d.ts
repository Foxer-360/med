/// <reference types="react" />
interface Examination {
    title: string;
    url?: LooseObject;
    description: string;
}
interface Box {
    title: string;
    url1Title?: string;
    url1?: LooseObject;
    url2Title?: string;
    url2?: LooseObject;
    url3Title?: string;
    url3?: LooseObject;
    image?: LooseObject;
}
export interface DescriptionProps {
    data: {
        titleCare: string;
        firstText: string;
        secondText: string;
        hideBtn: string;
        showHiddenText: boolean;
        titleExamination: string;
        examinations: Examination[];
        boxes: Box[];
    };
}
declare const Description: (props: DescriptionProps) => JSX.Element;
export default Description;

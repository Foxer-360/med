/// <reference types="react" />
interface Box {
    title: string;
    gradientColor: string;
    button: string;
    titleColor: string;
    image: LooseObject;
    link?: LooseObject;
}
export interface InfoBoxesProps {
    languageCode?: string;
    data: {
        title: string;
        boxes: Box[];
    };
}
declare const InfoBoxes: (props: InfoBoxesProps) => JSX.Element;
export default InfoBoxes;

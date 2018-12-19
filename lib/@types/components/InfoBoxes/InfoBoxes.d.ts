/// <reference types="react" />
interface Box {
    title: string;
    gradientColor: string;
    button: string;
    titleColor: string;
    image: LooseObject;
}
export interface InfoBoxesProps {
    data: {
        title: string;
        boxes: Box[];
    };
}
declare const InfoBoxes: (props: InfoBoxesProps) => JSX.Element;
export default InfoBoxes;

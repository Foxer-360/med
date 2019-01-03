/// <reference types="react" />
interface InfoRectangles {
    image: LooseObject;
    title: string;
    url: string;
}
export interface InfoRectanglesProps {
    data: {
        infoRectangles: InfoRectangles[];
    };
}
declare const InfoRectangles: (props: InfoRectanglesProps) => JSX.Element;
export default InfoRectangles;

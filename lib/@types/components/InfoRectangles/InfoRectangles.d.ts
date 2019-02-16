/// <reference types="react" />
interface InfoRectangles {
    image: LooseObject;
    title: string;
    url: LooseObject;
}
export interface InfoRectanglesProps {
    languageCode?: string;
    data: {
        infoRectangles: InfoRectangles[];
    };
}
declare const InfoRectangles: (props: InfoRectanglesProps) => JSX.Element;
export default InfoRectangles;

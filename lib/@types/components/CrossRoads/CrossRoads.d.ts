/// <reference types="react" />
export interface CrossRoadsProps {
    languageCode?: string;
    data: {
        items: [{
            text: string;
            image: object;
            link: LooseObject;
        }];
    };
}
declare const CrossRoads: (props: CrossRoadsProps) => JSX.Element;
export default CrossRoads;

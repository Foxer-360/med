/// <reference types="react" />
export interface CrossRoadsProps {
    data: {
        items: [{
            text: string;
            image: object;
        }];
    };
}
declare const CrossRoads: (props: CrossRoadsProps) => JSX.Element;
export default CrossRoads;

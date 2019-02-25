/// <reference types="react" />
export interface HighlightProps {
    data: {
        text: string;
        description: string;
        urlTitle: string;
        url: LooseObject;
    };
    languageCode?: string;
}
declare const Highlight: (props: HighlightProps) => JSX.Element;
export default Highlight;

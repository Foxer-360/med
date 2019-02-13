/// <reference types="react" />
export interface TextBlockProps {
    data: {
        title?: string;
        text?: string;
    };
}
declare const TextBlock: (props: TextBlockProps) => JSX.Element;
export default TextBlock;

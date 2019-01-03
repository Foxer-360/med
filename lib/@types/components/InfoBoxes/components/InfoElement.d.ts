/// <reference types="react" />
export interface InfoElementProps {
    title: string;
    gradientColor: string;
    button: string;
    titleColor: string;
    image: LooseObject;
    languageCode?: string;
    link?: LooseObject;
}
export default function InfoElement(props: InfoElementProps): JSX.Element;

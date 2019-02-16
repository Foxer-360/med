/// <reference types="react" />
export interface ReviewElementProps {
    cite: string;
    image: LooseObject;
    starCount: number;
}
export default function ReviewElement(props: ReviewElementProps): JSX.Element;

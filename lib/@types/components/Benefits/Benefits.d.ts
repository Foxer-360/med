/// <reference types="react" />
interface Benefits {
    text: string;
    image: LooseObject;
}
export interface BenefitsProps {
    data: {
        benefits: Benefits[];
    };
}
declare const Benefits: (props: BenefitsProps) => JSX.Element;
export default Benefits;

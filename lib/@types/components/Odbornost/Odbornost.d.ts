/// <reference types="react" />
export interface OdbornostProps {
    data: {
        image: LooseObject;
        doctorName: string;
        cite: string;
    };
}
declare const Odbornost: (props: OdbornostProps) => JSX.Element;
export default Odbornost;

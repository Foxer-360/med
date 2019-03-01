/// <reference types="react" />
export interface ContactsProps {
    data: {
        geo: string;
        phone: string;
        transport: string;
        transportImage: LooseObject;
    };
}
declare const PolyclinicInfo: (props: ContactsProps) => JSX.Element;
export default PolyclinicInfo;

/// <reference types="react" />
export interface ContactInfoProps {
    data: {
        address: string;
        phones: string;
        emails: string;
        additional: string;
    };
}
declare const ContactInfo: (props: ContactInfoProps) => JSX.Element;
export default ContactInfo;

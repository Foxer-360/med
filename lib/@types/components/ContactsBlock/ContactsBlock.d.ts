/// <reference types="react" />
interface ManagementContact {
    name: string;
    emails?: string;
    phones?: string;
    positions?: string;
}
interface NextContact {
    name: string;
    emails?: string;
    phones?: string;
    positions?: string;
}
interface OtherContact {
    name: string;
    emails?: string;
    phones?: string;
    positions?: string;
}
export interface ContactsBlockProps {
    data: {
        title: string;
        nextTitle: string;
        managementTitle: string;
        managementContacts: ManagementContact[];
        nextContacts: NextContact[];
        otherContacts: OtherContact[];
    };
}
declare const ContactsBlock: (props: ContactsBlockProps) => JSX.Element;
export default ContactsBlock;

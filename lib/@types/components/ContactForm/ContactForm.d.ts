import * as React from 'react';
export interface ContactFormProps {
}
export interface ContactFormState {
    formValues: {
        name: string;
        email: string;
        message: string;
    };
}
declare class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps);
    changeInputValue: (e: any) => void;
    render(): JSX.Element;
}
export default ContactForm;
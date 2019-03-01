import * as React from 'react';
export interface ContactFormProps {
    languageCode?: string;
    data: {
        title: string;
        gdprLink: LooseObject;
    };
}
export interface ContactFormState {
    formValues: {
        name: string;
        email: string;
        message: string;
        agreement: boolean;
    };
    formStatus: string;
    formErrorMessage: string;
    errors: {
        name: string;
        email: string;
        message: string;
    };
}
declare class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps);
    isValid(): boolean;
    toggleAgreement(): void;
    changeInputValue: (e: any) => void;
    resetForm: () => void;
    submit: (e: any, subject: any) => void;
    render(): JSX.Element;
}
export default ContactForm;

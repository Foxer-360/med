import * as React from 'react';
export interface CareerFormProps {
    data: {
        title: string;
        text: string;
        gdprLink: LooseObject;
    };
}
export interface CareerFormState {
    formStatus: string;
    formErrorMessage: string;
    formValues: {
        location: string;
        firstName: string;
        lastName: string;
        telephone: string;
        email: string;
        message: string;
        agreement: boolean;
        file: any;
    };
    errors: {
        firstName: string;
        lastName: string;
        telephone: string;
        email: string;
        message: string;
    };
}
export default class CareerForm extends React.Component<CareerFormProps, CareerFormState> {
    private fileRef;
    constructor(props: CareerFormProps);
    isValid(): boolean;
    toggleAgreement(): void;
    changeInputValue: (e: any) => void;
    resetForm: () => void;
    onChooseFile(): void;
    onChangeFile(e: any): void;
    submit: (e: any, subject: any) => void;
    render(): JSX.Element;
}

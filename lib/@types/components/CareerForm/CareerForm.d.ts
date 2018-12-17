import * as React from 'react';
export interface CareerFormProps {
    data: {
        title: string;
        text: string;
        gdprLink: string;
    };
}
export interface CareerFormState {
    formValues: {
        firstName: string;
        lastName: string;
        telephone: string;
        email: string;
        message: string;
    };
}
export default class CareerForm extends React.Component<CareerFormProps, CareerFormState> {
    constructor(props: CareerFormProps);
    changeInputValue: (e: any) => void;
    render(): JSX.Element;
}

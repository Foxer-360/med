import * as React from 'react';
interface Doctors {
    name: string;
    clinicName: string;
    clinicUrl: LooseObject;
    doctorUrl: LooseObject;
    field: string;
    image: LooseObject;
}
export interface DoctorListProps {
    languageCode?: string;
    data: {
        title: string;
        doctors: Doctors[];
    };
}
export interface DoctorListState {
    numberOfPage: number;
}
export default class DoctorList extends React.Component<DoctorListProps, DoctorListState> {
    constructor(props: DoctorListProps);
    render(): JSX.Element;
}
export {};

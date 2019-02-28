import * as React from 'react';
interface Clinic {
    name: string;
    image: LooseObject;
    description: string;
    address: string;
    district: string;
    phone: string;
    transport: string;
    transportImage: LooseObject;
    station: string;
    services: string;
    url?: LooseObject;
}
export interface PolyclinicsListProps {
    languageCode?: string;
    data: {
        clinics: Clinic[];
    };
}
export interface PolyclinicsListState {
    displayAllServices: boolean;
    activeCard: number;
}
declare class PolyclinicsList extends React.Component<PolyclinicsListProps, PolyclinicsListState> {
    constructor(props: PolyclinicsListProps);
    filterServices: (services: any, index: any) => any;
    toggleDisplayServices: (index: number) => void;
    render(): JSX.Element;
}
export default PolyclinicsList;

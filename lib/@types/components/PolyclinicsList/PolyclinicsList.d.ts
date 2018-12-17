/// <reference types="react" />
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
}
interface PolyclinicsListProps {
    data: {
        clinics: Clinic[];
    };
}
declare const PolyclinicsList: (props: PolyclinicsListProps) => JSX.Element;
export default PolyclinicsList;

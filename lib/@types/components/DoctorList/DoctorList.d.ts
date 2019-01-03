/// <reference types="react" />
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
declare const DoctorList: (props: DoctorListProps) => JSX.Element;
export default DoctorList;

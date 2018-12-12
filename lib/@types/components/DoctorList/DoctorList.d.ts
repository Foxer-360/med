/// <reference types="react" />
interface Doctors {
    name: string;
    clinicName: string;
    clinicUrl: string;
    field: string;
    image: LooseObject;
}
export interface DoctorListProps {
    data: {
        title: string;
        doctors: Doctors[];
    };
}
declare const DoctorList: (props: DoctorListProps) => JSX.Element;
export default DoctorList;

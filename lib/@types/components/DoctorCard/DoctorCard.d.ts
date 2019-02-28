/// <reference types="react" />
export interface DoctorCardProps {
    data: {
        name: string;
        specialization: string;
        nurse: string;
        phone: string;
        doctorImage: LooseObject;
        clinicImage: LooseObject;
        clinicName: string;
        clinicExtraInfo: string;
        clinicAddress: string;
        additionalInfo: [{
            title: string;
            text: string;
        }];
    };
}
declare const DoctorCard: (props: DoctorCardProps) => JSX.Element;
export default DoctorCard;

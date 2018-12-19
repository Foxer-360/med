/// <reference types="react" />
export interface DoctorScheduleProps {
    data: [{
        day: string;
        eveningHoursdescription: string;
        eveningOpeningHours: string;
        morningHoursdescription: string;
        morningOpeningHours: string;
    }];
}
declare const DoctorSchedule: (props: DoctorScheduleProps) => JSX.Element;
export default DoctorSchedule;

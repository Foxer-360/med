/// <reference types="react" />
export interface DoctorScheduleProps {
    data: {
        schedule: LooseObject;
        oddWeekTitle: String;
        evenWeekTitle: String;
        regularWeekTitle: String;
        absences: LooseObject[];
    };
}
declare const DoctorSchedule: (props: DoctorScheduleProps) => JSX.Element;
export default DoctorSchedule;

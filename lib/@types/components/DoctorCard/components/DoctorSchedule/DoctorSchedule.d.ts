/// <reference types="react" />
export interface DayItem {
    day: string;
    morningHours: {
        time?: string;
        description?: string;
    };
    noonHours: {
        time?: string;
        description?: string;
    };
    afternoonHours: {
        time?: string;
        description?: string;
    };
    lateAfternoonHours: {
        time?: string;
        description?: string;
    };
}
export interface DoctorScheduleProps {
    data: DayItem[];
    title?: String;
}
declare const DoctorSchedule: (props: DoctorScheduleProps) => JSX.Element;
export default DoctorSchedule;

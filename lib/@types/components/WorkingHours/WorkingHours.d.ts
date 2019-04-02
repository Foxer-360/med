/// <reference types="react" />
interface Item {
    day: string;
    eveningHoursDescription: string;
    eveningHours: string;
    morningHoursDescription: string;
    morningHours: string;
}
export interface WorkingHoursProps {
    data: {
        items: Array<Item>;
    };
}
declare const WorkingHours: (props: WorkingHoursProps) => JSX.Element;
export default WorkingHours;

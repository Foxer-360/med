/// <reference types="react" />
export interface WorkingHoursProps {
    data: {
        items: Array<{
            day: string;
            eveningHoursDescription: string;
            eveningHours: string;
            morningHoursDescription: string;
            morningHours: string;
        }>;
    };
}
declare const WorkingHours: (props: WorkingHoursProps) => JSX.Element;
export default WorkingHours;

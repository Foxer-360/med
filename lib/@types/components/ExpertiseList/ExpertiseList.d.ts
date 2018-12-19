/// <reference types="react" />
interface Expertise {
    title: string;
    url: string;
    image: LooseObject;
}
export interface ExpertiseListProps {
    data: {
        title: string;
        expertiseList: Expertise[];
    };
}
declare const ExpertiseList: (props: ExpertiseListProps) => JSX.Element;
export default ExpertiseList;

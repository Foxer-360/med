/// <reference types="react" />
interface Expertise {
    title: string;
    url: LooseObject;
    image: LooseObject;
}
export interface ExpertiseListProps {
    languageCode?: string;
    data: {
        title: string;
        expertiseList: Expertise[];
    };
}
declare const ExpertiseList: (props: ExpertiseListProps) => JSX.Element;
export default ExpertiseList;

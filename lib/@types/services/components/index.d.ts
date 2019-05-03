/// <reference types="react" />
import { Dummy, Header, DoctorList, PolyclinicsList, ExpertiseList, Blog, MyProblem, JobPositions, MedicalGroup, Timeline, ContactForm, Faq } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Dummy | typeof Header | ((props: import("../../components/CrossRoads/CrossRoads").CrossRoadsProps) => JSX.Element) | ((props: import("../../components/Benefits/Benefits").BenefitsProps) => JSX.Element) | ((props: import("../../components/Highlight/Highlight").HighlightProps) => JSX.Element) | ((props: import("../../components/Reviews/Reviews").ReviewsProps) => JSX.Element) | ((props: import("../../components/TextBlock/TextBlock").TextBlockProps) => JSX.Element) | typeof DoctorList | typeof PolyclinicsList | typeof ExpertiseList | typeof Blog | typeof MyProblem | typeof JobPositions | typeof MedicalGroup | typeof Timeline | typeof ContactForm | typeof Faq;
    /***/
    getComponentResource(type: string): typeof resources.benefits;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;

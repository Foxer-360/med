/// <reference types="react" />
import { Dummy, Header, DoctorList, PolyclinicsList, Blog, MyProblem, MedicalGroup, Timeline, ContactForm } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Benefits/Benefits").BenefitsProps) => JSX.Element) | ((props: import("../../components/CrossRoads/CrossRoads").CrossRoadsProps) => JSX.Element) | typeof Dummy | typeof Header | ((props: import("../../components/Highlight/Highlight").HighlightProps) => JSX.Element) | ((props: import("../../components/InfoBoxes/InfoBoxes").InfoBoxesProps) => JSX.Element) | typeof DoctorList | typeof PolyclinicsList | typeof Blog | typeof MyProblem | typeof Timeline | typeof MedicalGroup | typeof ContactForm;
    /***/
    getComponentResource(type: string): typeof resources.benefits;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;

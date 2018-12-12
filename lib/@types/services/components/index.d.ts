/// <reference types="react" />
import { Footer } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Benefits/Benefits").BenefitsProps) => JSX.Element) | ((props: import("../../components/CrossRoads/CrossRoads").CrossRoadsProps) => JSX.Element) | typeof Footer;
    /***/
    getComponentResource(type: string): typeof resources.benefits;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;

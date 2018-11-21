/// <reference types="react" />
import { Header } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Header | ((props: import("../../components/CrossRoads/CrossRoads").CrossRoadsProps) => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.dummy;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;

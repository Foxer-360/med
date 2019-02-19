import * as React from 'react';
import { RouteComponentProps } from 'react-router';
interface Properties extends RouteComponentProps<LooseObject> {
    data?: any;
    children: (data: LooseObject) => JSX.Element;
    searchedText?: string;
}
declare const _default: React.ComponentClass<Pick<Properties, "data" | "children" | "searchedText">, any>;
export default _default;

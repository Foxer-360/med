import * as React from 'react';
interface Properties {
    data: any;
    children: (data: LooseObject) => JSX.Element;
}
declare class List extends React.Component<Properties, {}> {
    render(): JSX.Element;
    replaceWithSourceItemValues(source: string, item: LooseObject): string;
    datasourcesList: (data: any) => JSX.Element;
}
export default List;

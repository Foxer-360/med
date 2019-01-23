import * as React from 'react';
export interface MedicalGroupProps {
    data: {
        title: string;
        companies: [{
            name: string;
            subtitle: string;
            text: string;
        }];
    };
}
export interface MedicalGroupState {
    activeIndex: number;
    listHeight: number;
}
declare class MedicalGroup extends React.Component<MedicalGroupProps, MedicalGroupState> {
    list: any;
    constructor(props: MedicalGroupProps);
    handleItemClick: (index: number) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default MedicalGroup;

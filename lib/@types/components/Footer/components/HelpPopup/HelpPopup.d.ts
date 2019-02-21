import * as React from 'react';
export interface HelpPopupProps {
}
export interface HelpPopupState {
    active: boolean;
}
export default class HelpPopup extends React.Component<HelpPopupProps, HelpPopupState> {
    constructor(props: HelpPopupProps);
    toggleList: () => void;
    render(): JSX.Element;
}

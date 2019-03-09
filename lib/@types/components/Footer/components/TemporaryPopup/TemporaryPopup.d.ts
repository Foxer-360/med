import * as React from 'react';
export interface TemporaryPopupProps {
}
export interface TemporaryPopupState {
    active: boolean;
    text: string;
}
export default class TemporaryPopup extends React.Component<TemporaryPopupProps, TemporaryPopupState> {
    constructor(props: TemporaryPopupProps);
    close: () => void;
    render(): JSX.Element;
}

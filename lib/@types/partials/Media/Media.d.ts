import * as React from 'react';
export interface MediaProps {
    type: string;
    data: any;
}
export interface MediaState {
}
declare class Media extends React.Component<MediaProps, MediaState> {
    constructor(props: MediaProps);
    getImgUrl: (data: any) => string;
    render(): JSX.Element;
}
export default Media;

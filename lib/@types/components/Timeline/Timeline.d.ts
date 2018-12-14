import * as React from 'react';
export interface TimelineProps {
    data: {
        title: '';
        items: [{}];
    };
}
export interface TimelineState {
    x: number;
    limitLeft: boolean;
    limitRight: boolean;
}
declare class Timeline extends React.Component<TimelineProps, TimelineState> {
    timeline: any;
    constructor(props: TimelineProps);
    translateTimeline: (ammount: any) => void;
    handleSwipe: (e: any, direction: any, deltaX: any, velocity: any) => void;
    handleDrag: (e: any) => void;
    arrowClick: (e: any, direction: any) => void;
    renderPoints: () => any[];
    render(): JSX.Element;
}
export default Timeline;

import * as React from 'react';
export interface HeroProps {
    data: {
        title: string;
        text: string;
        displaySearch: boolean;
    };
}
export interface HeroState {
}
declare class Hero extends React.Component<HeroProps, HeroState> {
    render(): JSX.Element;
}
export default Hero;

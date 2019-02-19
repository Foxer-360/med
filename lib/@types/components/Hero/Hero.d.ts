import * as React from 'react';
export interface HeroProps {
    data: {
        title: string;
        text: string;
        placeholder: string;
        displaySearch: boolean;
        image: LooseObject;
        displayOverlay: boolean;
        titleColor: string;
        textColor: string;
    };
}
export interface HeroState {
}
declare class Hero extends React.Component<HeroProps, HeroState> {
    render(): JSX.Element;
}
export default Hero;

import * as React from 'react';

export interface ReviewElementProps {
    img: string;
    cite: string;
    starCount: number;
}

export default function ReviewElement(props: ReviewElementProps) {

    var rows = [];
    for (var i = 0; i < props.starCount; i++) {
        rows.push(<img src="/assets/medicon/images/star.png" alt="star" />);
    }

    return (
        <div className="review-el">
            <img className="review-img" src={props.img} alt="photo" />
            <div className="el">
                <cite>{props.cite}</cite>
                <div className="stars">{rows}</div>
            </div>
        </div>
    );
}
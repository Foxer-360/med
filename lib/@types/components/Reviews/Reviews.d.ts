/// <reference types="react" />
interface Reviews {
    cite: string;
    image: LooseObject;
    starCount: number;
}
export interface ReviewsProps {
    data: {
        title: string;
        reviews: Reviews[];
    };
}
declare const Reviews: (props: ReviewsProps) => JSX.Element;
export default Reviews;

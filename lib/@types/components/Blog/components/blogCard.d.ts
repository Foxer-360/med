/// <reference types="react" />
export interface BlogCardProps {
    title: string;
    text: string;
    color: string;
    img: string;
    special?: boolean;
}
export declare function BlogCard(props: BlogCardProps): JSX.Element;

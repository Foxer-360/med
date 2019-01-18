/// <reference types="react" />
export interface AppProps {
    data: {
        title: string;
        image?: LooseObject;
        text: string;
    };
}
declare const BlogArticle: (props: AppProps) => JSX.Element;
export default BlogArticle;

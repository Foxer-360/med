/// <reference types="react" />
export interface AppProps {
    data: {
        text: string;
        title: string;
        image?: LooseObject;
        textAlign: string;
    };
}
declare const BlogArticle: (props: AppProps) => JSX.Element;
export default BlogArticle;

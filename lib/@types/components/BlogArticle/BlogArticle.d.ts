/// <reference types="react" />
export interface AppProps {
    data: {
        title: string;
        image?: LooseObject;
        text: string;
        textAlign: string;
    };
}
declare const BlogArticle: (props: AppProps) => JSX.Element;
export default BlogArticle;

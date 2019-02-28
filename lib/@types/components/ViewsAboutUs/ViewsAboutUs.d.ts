/// <reference types="react" />
interface View {
    url: string;
    link: string;
    cite: string;
    image: LooseObject;
}
export interface ViewsAboutUsPops {
    data: {
        title: string;
        views: View[];
    };
}
declare const ViewsAboutUs: (props: ViewsAboutUsPops) => JSX.Element;
export default ViewsAboutUs;

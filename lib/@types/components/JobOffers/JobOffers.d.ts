/// <reference types="react" />
interface Offer {
    title: string;
    url: string;
    image: LooseObject;
}
export interface JobOffersProps {
    languageCode?: string;
    data: {
        title: string;
        offers: Offer[];
    };
}
declare const jobOffers: (props: JobOffersProps) => JSX.Element;
export default jobOffers;

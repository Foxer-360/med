/// <reference types="react" />
interface Downloads {
    title: string;
    file?: LooseObject;
}
export interface DownloadsProps {
    data: {
        title: string;
        description: string;
        downloads: Downloads[];
    };
}
declare const Downloads: (props: DownloadsProps) => JSX.Element;
export default Downloads;

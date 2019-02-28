/// <reference types="react" />
export interface AvatarProps {
    onClick: (area: string) => void;
    activeArea: string;
}
declare const Avatar: (props: AvatarProps) => JSX.Element;
export default Avatar;

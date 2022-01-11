/// <reference types="react" />
import './myLabel.css';
export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
}
export declare const MyLabel: ({ label, size }: Props) => JSX.Element;

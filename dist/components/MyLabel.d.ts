/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * the text of label
     */
    label: string;
    /**
     * the size (classname) of button
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * the color of label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * label text to uppercase?
     */
    allCaps?: boolean;
    /**
     * choose label font color
     */
    fontColor?: string;
    /**
     * choose label background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;

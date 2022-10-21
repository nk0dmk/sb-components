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
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor = 'black',

}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}

    </span>
  )
}

import './myLabel.css';

export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
}

export const MyLabel = ( {
    label = 'no label',
    size = 'normal'
}: Props) => {

    return (
        <span className={`${size}`}>
            { label }
        </span>
    )

}
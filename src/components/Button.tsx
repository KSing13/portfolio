import { ReactNode } from 'react';

interface Props {
    children?: ReactNode; //? = optional
    onClick: () => void;
    colour?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'menu';
}

const Button = ( {children, onClick, colour='primary'} : Props) => {
    return (
        <button className={ 'btn btn-' + colour } onClick={ onClick }>{ children }</button>
    )
}

export default Button;
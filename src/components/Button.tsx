import { ReactNode } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab);

interface Props {
    children?: ReactNode; //? = optional
    onClick: () => void;
    colour?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'nav'; //? = optional
}

const Button = ( {children, onClick, colour='primary'} : Props) => {
    return (
        <button className={ 'btn btn-' + colour } onClick={ onClick }>{ children }</button>
    )
}

export default Button;
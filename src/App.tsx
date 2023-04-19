import { ReactNode, useState } from 'react';
import './css/App.css';
import Menu from './modules/Menu';

interface Props {
    children: ReactNode;
}

const App = ( {children} : Props) => {
    return (
        <div>
            <div className='header-custom'>
                <Menu/>
            </div>
            <div className='content-custom'>
                { children }
            </div>
        </div>
    )
}

export default App;

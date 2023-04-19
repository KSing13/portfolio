import { ReactNode, useState } from 'react';
import './css/App.css';
import Header from './modules/Header';
import Menu from './modules/Menu';

interface Props {
    children: ReactNode;
    idActive: string;
}

const App = ( {idActive, children} : Props) => {
    const [navVisibility, setNavVisibility] = useState(false);

    return (
        <div>
            <Header onClick={() => setNavVisibility(true)}></Header>
            { navVisibility && <Menu onClose={() => setNavVisibility(false)} setActive={idActive}></Menu> }
            { children }
        </div>
    )
}

export default App;

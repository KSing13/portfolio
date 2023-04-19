import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

const Body = ( {children} : Props ) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default Body;
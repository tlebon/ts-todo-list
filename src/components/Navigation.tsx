import * as React from 'react';
import './Navigation.css'
interface INavigation {
    navItem: string;
    setNavItem: React.Dispatch<React.SetStateAction<string>>
}

export default function Navigation(params: INavigation) {
    const { navItem, setNavItem } = params
    const nav = ['all', 'completed', 'unfinished'];

    const navMap = nav.map((item) => <li key={item} onClick={() => setNavItem(item)} className={navItem === item ? 'selected' : undefined}>{item}</li>)

    return (<>
        <nav>
            <ul className='navBar'>
                {navMap}
            </ul>
        </nav>
    </>)
}
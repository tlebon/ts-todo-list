import * as React from 'react';
import Todos from './ToDos';
import './Navigation.css'
interface INavigation {
    setList: React.Dispatch<React.SetStateAction<[string, boolean][]>>
    list: [string, boolean][];

}

export default function Navigation(params: INavigation) {
    const { list, setList } = params;

    const [navItem, setNavItem] = React.useState('all')
    const nav = ['all', 'completed', 'unfinished'];


    // React.useEffect(() => {
    //     navItem === 'all' ? setFiltered(list) : navItem === 'completed' ? setFiltered(list.filter(item => item[1] === true)) : setFiltered(list.filter(item => item[1] === false))
    // }, [list, navItem])


    const navMap = nav.map((item) => <li key={item} onClick={() => setNavItem(item)}className={navItem===item? 'selected':undefined}>{item}</li>)

    return (<>
        <nav>
            <ul className='navBar'>
                {navMap}
            </ul>
        </nav>
        <Todos setList={setList} list={list} navItem={navItem}/>

    </>)
}
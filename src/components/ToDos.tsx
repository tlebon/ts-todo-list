import * as React from 'react';
import './ToDos.css'

interface ITodos {
    setList: React.Dispatch<React.SetStateAction<[string, boolean][]>>
    list: [string, boolean][];
    navItem: string;
}
export default function Todos(params: ITodos) {
    const { navItem, list, setList } = params;

    function removeItem(i: number) {
        setList(list.filter((_, index) => i !== index))
    }
    function crossItem(item: [string, boolean]) {
        console.log('cross item')
        setList(list.map((listItem) => item === listItem ? [listItem[0], !listItem[1]] : listItem))
    }
    const mappedList = list
        .filter((todo) => navItem === 'completed' ? todo[1] === true : navItem === 'unfinished' ? todo[1] === false : todo)
        .map((item: [string, boolean], index: number) => (
            <li className='todo' key={index}>
                <input type="checkbox" onChange={() => crossItem(item)} checked={item[1]}></input>
                <span className={item[1] === true ? 'cross' : undefined}>{item[0]}</span>
                <button onClick={() => removeItem(index)}>x</button>
            </li>))
    return (
        <ul>
            {mappedList}
        </ul>

    )
}
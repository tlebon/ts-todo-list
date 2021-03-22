import * as React from 'react';
import Entry from './Entry';
import './ToDos.css'

// interface ITodo{
//     todo:[string, boolean]
// }
interface ITodos {
    setList: React.Dispatch<React.SetStateAction<[string, boolean][]>>
    list: [string, boolean][];
    navItem: string;
}
export default function Todos(params: ITodos) {
    const { navItem, list, setList } = params;
    const [edit, setEdit] = React.useState<number | null>(null)
    function removeItem(item: [string, boolean]) {
        setList(list.filter((listItem) => listItem !== item))
    }
    function crossItem(item: [string, boolean]) {
        console.log('cross item')
        setList(list.map((listItem) => item === listItem ? [listItem[0], !listItem[1]] : listItem))
    }
    const mappedList = list
        .filter((todo) => navItem === 'completed' ? todo[1] === true : navItem === 'unfinished' ? todo[1] === false : todo)
        .map((item: [string, boolean], index: number) => (
            <li className='todo' key={index}>
                { edit === index ? <Entry list={list} setList={setList} setEdit={setEdit} edit={edit} /> : <div>
                    <input type="checkbox" onChange={() => crossItem(item)} checked={item[1]}></input>
                    <span className={item[1] === true ? 'cross' : undefined}>{item[0]}</span>
                    <button onClick={() => removeItem(item)}>x</button></div>}
                <button onClick={() => setEdit(index)}>edit me</button>
            </li>))
    return (
        <ul>
            {mappedList}
        </ul>

    )
}
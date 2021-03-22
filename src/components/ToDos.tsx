import * as React from 'react';
import Entry from './Entry';
import './ToDos.css'

export interface ITodo {
    task: string;
    completed: boolean;
}
interface ITodos {
    setList: React.Dispatch<React.SetStateAction<ITodo[]>>
    list: ITodo[];
    navItem: string;
}
export default function Todos(params: ITodos) {
    const { navItem, list, setList } = params;
    const [edit, setEdit] = React.useState<number | null>(null)
    function removeItem(item: ITodo) {
        setList(list.filter((listItem) => listItem !== item))
    }
    function crossItem(item: ITodo) {
        console.log('cross item')
        setList(list.map((listItem) => item === listItem ? { ...listItem, completed: !listItem.completed } : listItem))
    }
    const mappedList = list
        .filter((todo) => navItem === 'completed' ? todo.completed : navItem === 'unfinished' ? !todo.completed : todo)
        .map((item: ITodo, index: number) => {
            const trueIndex = list.findIndex(filtered => item === filtered)
            return (
                <li className='todo' key={index}>
                    { edit === trueIndex ? <Entry list={list} setList={setList} setEdit={setEdit} edit={edit} /> : <div>
                        <input type="checkbox" onChange={() => crossItem(item)} checked={item.completed}></input>
                        <span className={item.completed === true ? 'cross' : undefined}>{item.task}</span>
                        <button onClick={() => removeItem(item)}>x</button></div>}
                    <button onClick={() => setEdit(trueIndex)}>edit me</button>
                </li>)
        })
    return (
        <ul>
            {mappedList}
        </ul>

    )
}
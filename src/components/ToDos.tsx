import * as React from 'react';
import './ToDos.css'

interface ITodos {
    setList: React.Dispatch<React.SetStateAction<[string, boolean][]>>
    list: [string, boolean][];
}
export default function Todos(params: ITodos) {
    const { list, setList } = params;

    function removeItem(i: number) {
        setList(list.filter((_, index) => i !== index))
    }
    function crossItem(index: number) {
        console.log('cross item')
        setList(list.map((item, i) => i === index ? [item[0], !item[1]] : item))
    }
    const mappedList = list.map((item: [string, boolean], index: number) => (
        <li key={index}>
            <input type="checkbox" onClick={() => crossItem(index)} checked={item[1]}></input>
            <span className={item[1] === true ? 'cross' : undefined}>{item[0]}</span>
            <button onClick={() => removeItem(index)}>x</button>
        </li>))
    return (
        <ul>
            {mappedList}
        </ul>

    )
}
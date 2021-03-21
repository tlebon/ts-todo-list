import * as React from 'react';

interface ITodos{
    list: string[];
    setList: React.Dispatch<React.SetStateAction<string[]>>
}
export default function Todos(params:ITodos) {
    const { list } = params;

    function removeItem(i: number){
        console.log(i)
    }
    const mappedList = list.map((item: string, index:number) => <li>{item} <button onClick={() => removeItem(index)}>x</button></li>)
    return (<ul>
        {mappedList}
    </ul>

    )
}
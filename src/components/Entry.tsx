import * as React from 'react';
import { ITodo } from './ToDos';

interface IEntry {
    setList: React.Dispatch<React.SetStateAction<ITodo[]>>
    list: ITodo[];
    setEdit?: React.Dispatch<React.SetStateAction<number | null>>
    edit?: number;
}
export default function Entry(params: IEntry) {
    const { edit, setEdit, setList, list } = params;
    const [text, setText] = React.useState('');

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (setEdit) {
            console.log(text, edit)
            setList(list.map((item, i) => i === edit ? { task: text, completed: item.completed } : item))
            setEdit(null)
        }
        else { setList([...list, { task: text, completed: false }]) }
        setText('')
    }
    return (
        <form onSubmit={(e) => submit(e)} >
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
        </form>
    )
}
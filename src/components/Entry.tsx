import * as React from 'react';

interface IEntry {
    setList: React.Dispatch<React.SetStateAction<[string, boolean][]>>
    list: [string, boolean][];
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
            setList(list.map((item, i) => i === edit ? [text, item[1]] : item))
            setEdit(null)
        }
        else { setList([...list, [text, false]]) }
        setText('')
    }
    return (
        <form onSubmit={(e) => submit(e)} >
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
        </form>
    )
}
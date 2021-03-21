import * as React from 'react';

interface IEntry {
    setList: React.Dispatch<React.SetStateAction<[string,boolean][]>>
    list: [string,boolean][];

}
export default function Entry(params: IEntry) {
    const { setList, list } = params;
    const [text, setText] = React.useState('');

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setList([...list, [text, false]])
        setText('')
    }
    return (
        <form onSubmit={(e) => submit(e)} >
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
        </form>
    )
}
import * as React from 'react';

interface IEntry {
    setList: React.Dispatch<React.SetStateAction<string[]>>
    list: string[];

}
export default function Entry(params: IEntry) {
    const { setList, list } = params;
    const [text, setText] = React.useState('');

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('submitted')
        setList([...list, text])
    }
    return (
        <form onSubmit={(e) => submit(e)} >
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
        </form>
    )
}
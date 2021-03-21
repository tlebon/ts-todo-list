import React from 'react';
import Entry from './components/Entry';
import Navigation from './components/Navigation'
import ToDos from './components/ToDos';
import './App.css';

function App() {
  const [list, setList] = React.useState<[string,boolean][]>([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <Entry setList={setList} list={list} />
        <Navigation setList={setList} list={list}/>
        {/* <ToDos setList={setList} list={list} /> */}
      </header>
    </div>
  );
}

export default App;

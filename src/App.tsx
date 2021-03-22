import React from 'react';
import Entry from './components/Entry';
import Navigation from './components/Navigation'
import ToDos, { ITodo } from './components/ToDos';
import './App.css';

function App() {
  const [list, setList] = React.useState<ITodo[]>([])

  const [navItem, setNavItem] = React.useState('all')
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <Entry setList={setList} list={list} />
        <Navigation setNavItem={setNavItem} navItem={navItem} />
        <ToDos setList={setList} list={list} navItem={navItem} />
      </header>
    </div>
  );
}

export default App;

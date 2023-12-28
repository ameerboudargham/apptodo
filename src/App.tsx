import './App.css';
import { useTodoStore } from '../src/store/Todo';

import Header1 from './components/Header1';
// @ts-ignore
import Navigation from './components/Navigation';
import Line from './components/Line';
import TodoItems from './components/TodoItems';


function App() {
  const {todos} = useTodoStore()
  const {done} = useTodoStore()
  return (
    <div className="App">
      <div className="container px-24 py-10">
        <Header1 />
        <Navigation />
        <Line />
        <TodoItems notes={todos} done={done} />
      </div>
     
    </div>
  );
}

export default App;
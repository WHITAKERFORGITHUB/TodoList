import './App.css';
import Header from "./component/Header"
import TodoEditor from './component/TodoEditor';
import TodoLiet from "./component/TodoList"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoEditor></TodoEditor>
      <TodoLiet></TodoLiet>  
    </div>
  );
}

export default App;

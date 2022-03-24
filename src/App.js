import React, {useEffect} from "react";
import ToDoList from "./components/ToDoList";
import Context from "./context";
import Loader from './Loader';
import Modal from "./Modal/Modal";

const AddToDo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./components/AddToDo'));
    }, 3000);
}));

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then(todos =>
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000)
                );
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addToDoItem(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

      return (
          <Context.Provider value={{removeItem: removeTodo}}>
        <div className="wrapper">
            <h1>REACT-example-app</h1>
            <Modal/>
            <React.Suspense fallback={<p>Загрузка...</p>}>
                <AddToDo onCreate={addToDoItem}/>
            </React.Suspense>
            {loading && <Loader/>}
            {todos.length ? <ToDoList listOfTodos={todos} onToggle={toggleTodo} /> : loading ? null : <p>Список пуст!</p>}
        </div>
          </Context.Provider>
      );
}

export default App;

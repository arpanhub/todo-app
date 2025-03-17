import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import { Container } from 'react-bootstrap';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then(async function (res) {
                const json = await res.json();
                setTodos(json.todos);
            });
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="text-center">To-Do App</h1>
            <CreateTodo />
            <Todos todos={todos} />
        </Container>
    );
}

export default App;

import { ListGroup, Button } from 'react-bootstrap';

export function Todos({ todos }) {
    return (
        <ListGroup className="my-3">
            {todos.map((todo, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{todo.title}</h5>
                        <p>{todo.description}</p>
                    </div>
                    <Button variant={todo.completed ? "success" : "secondary"}>
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

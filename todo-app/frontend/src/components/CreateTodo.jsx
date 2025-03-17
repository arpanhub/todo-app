import { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Both title and description are required.');
            return;
        }
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: { "Content-type": "application/json" }
        })
        .then(async function (response) {
            const json = await response.json();
            alert("Todo added");
        });
    };

    return (
        <Form className="my-3">
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>

            <Button className="mt-3" variant="primary" onClick={handleSubmit}>
                Add To-do
            </Button>
        </Form>
    );
}

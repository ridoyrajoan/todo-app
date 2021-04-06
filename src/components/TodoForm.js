import React, {useState} from 'react';
import uuid from 'uuid';
import { Button, TextField } from "@material-ui/core"

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim){
            addTodo({...todo, id: uuid.v4()});
            //reset task input
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField 
                label="Task"
                name = "task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm

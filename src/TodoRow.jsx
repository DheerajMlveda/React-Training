import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { DeleteTodo } from './ApiServices';


function TodoRow(props) {
  const [deleting, setDeleting] = useState(false)


  // console.log(props.todo.id);
  function deleteTodo(key) {
    setDeleting(true);
    DeleteTodo(key)
      .then(function (response) {
        setDeleting(false)
        console.log(`deleting complete for ${key}`)
        props.setTodos((todos) => todos.filter((element) => {
          return element.id !== key;
        }));
      })
      .catch(function (error) {
        console.log(error);
        props.setError(true);
        props.setErrorContent(error)
      })
      .finally(function () {
        // always executed
        // console.log(key);
        setDeleting(false);
      });



  }
  return (
    <ListGroup.Item
      key={props.todo.id}
      id={props.key}
      style={{
        position: "relative",
      }}
    >
      <div>
        <>
          {" "}
          Index :-
          {props.todo.id} <br />
        </>
        <span>
          {" "}
          Title :-
          {props.todo.title}
        </span>
      </div>
      <Button active={!deleting ? true : false}
        onClick={() => deleteTodo(props.todo.id)}
        variant={!deleting ? 'primary' : 'secondary'} size="sm" >Delete
      </Button>
    </ListGroup.Item>
  )
}

export default TodoRow
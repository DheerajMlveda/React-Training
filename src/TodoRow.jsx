import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { DeleteTodo } from './ApiServices';
import ErrorBoundary from './ErrorBoundary';
// import ErrorBoundary from './ErrorBoundary';


function TodoRow(props) {
  const [deleting, setDeleting] = useState(false)
  const [errorCheck, setErrorCheck] = useState(false)


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
      .catch((error) =>{
        setDeleting(true);
          setErrorCheck(true);
      })

      
      .finally(function () {
        // always executed
        // console.log(key);
        setDeleting(false);
      });
    
  }
  if( errorCheck)throw new Error('hey hey')
  return (

    <ListGroup.Item
   
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
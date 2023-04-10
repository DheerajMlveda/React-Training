import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactLoading from "react-loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoRow from "./TodoRow";
import { fetchTodos } from "./ApiServices"
import Alert from 'react-bootstrap/Alert';
function DataFetching() {
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  const [pageChange, setPageChange] = useState(false)
  const [error, setError] = useState(false)
  const [errorContent, setErrorContent] = useState({})
  useEffect(() => {
    fetchTodos(currentPageIndex)
      .then(function (response) {
        // console.log(response);
        console.log(currentPageIndex)
        setTodos(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {

        setError(true)
        setIsLoading(false)
        setErrorContent(error)


      })
      .finally(function () {
        // always executed
        // console.log("hello");
      });
  }, [currentPageIndex]);

  function onPaginationUpdate(newPage) {
    setCurrentPageIndex(newPage);
    setPageChange(true)
    fetchTodos(newPage)
      .then(function (response) {
        setTodos(response.data);
        setIsLoading(false);

      })
      .catch(function (error) {
        setError(true)
        setIsLoading(false)
        setErrorContent(error)
      })
      .finally(function () {
        // always executed
        // console.log(currentPageIndex);
        setPageChange(false)
      });
  }


  return (

    <div style={{
      maring: 'auto',
      display: "flex",
      alignSelf: 'center',
      flexDirection: "column",
      // alignItems: "space-around",
      // alignContent:"space-around",
      // justifyContent: 'center',
    }}>

      {isLoading ? (
        <ReactLoading type="cubes" color="grey" height={260} width={260} />
      ) : !error ? (
        <ListGroup>
          {todos.map((todo) => {
            return (
              <TodoRow setError={setError} setErrorContent={setErrorContent} todo={todo} todos={todos} setTodos={setTodos} />
            );
          })}
        </ListGroup>
      ) : (<Alert variant="danger"> {errorContent.message}</Alert>)




      }
      <div style={{ color: 'yellow', position: 'relative' }}>
        <div style={{ position: "absolute", margin: '10px', left: "0px" }}>
          <Button onClick={() => onPaginationUpdate(currentPageIndex - 1)} active={currentPageIndex > 1 && !pageChange ? true : false} variant={currentPageIndex > 1 && !pageChange ? 'primary' : 'secondary'} >previous</Button>
        </div>

        <div style={{ position: "absolute", margin: '10px', right: '0px' }}>
          <Button onClick={() => onPaginationUpdate(currentPageIndex + 1)} active={currentPageIndex < 20 && !pageChange ? true : false} variant={currentPageIndex < 20 && !pageChange ? 'primary' : 'secondary'} >next</Button>
        </div>
      </div>

    </div>
  );
}

export default DataFetching;

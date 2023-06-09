import axios from "axios";

export function fetchTodos(currentPageIndex) {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`, {
    params: {
      _page: currentPageIndex,
      _limit: 10,
    },
  });
}

export function DeleteTodo(todoId) {
  return axios.delete(
    `https://jsnplaceholder.typicode.com/todos/${todoId}`,
    {}
  );
}

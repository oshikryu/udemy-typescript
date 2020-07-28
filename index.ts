import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// these are used to define the structure of an object - like proptypes
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const prom = axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`${id}, title: ${title}, is finished: ${completed}`);
};

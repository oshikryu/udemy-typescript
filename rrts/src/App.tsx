import React from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  color?: string;
  todos: Todo[];
  // Cheating for redux-thunk and type-definition file
  //fetchTodos: typeof fetchTodos;
  //deleteTodo: typeof deleteTodo,
  fetchTodos: Function;
  deleteTodo: Function,
}

interface AppState {
  counter: number;
  fetching: boolean;
}

// functional component
//const App = (props: AppProps): JSX.Element => {
  //return (
    //<div>
      //{props.color}
    //</div>
  //);
//};

// class component
class AppComponent extends React.Component <AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0, fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false});
    }
  }

  onIncrement = (): void => {
    this.setState({counter: this.state.counter + 1});
  }

  onDecrement = (): void => {
    this.setState({counter: this.state.counter - 1});
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({fetching: true})
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <li onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  }

  render() {
    const { color } = this.props;
    return (
      <div>
        <div>
          {color}
        </div>
        <button onClick={this.onIncrement}>
          increment
        </button>
        <button onClick={this.onDecrement}>
          decrement
        </button>
        {this.state.counter}
        <br />
        <div>
          <button onClick={this.onButtonClick}>Fetch</button>
        </div>
        <ul>
          {this.renderList()}
          {this.state.fetching && 'L o a d i n g . . .'}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[], color: string} => {
  return {
    todos: state.todos,
    color: 'red',
  };
};

// first set for the configuration
// second for the component (aka mapDispatchToProps)
// what does react-redux think an action-creator is
// connect thinks it is a function that returns and object and nothing else
//
// App returns void, not an action
// redux-thunk returns a function that dispatches an action
export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(AppComponent);


//ReactDOM.render(<App />, document.querySelector('#root'));

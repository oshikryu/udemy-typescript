import React from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  color?: string;
  todos: Todo[];
  fetchTodos(): any;
}

interface AppState {
  counter: number;
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
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({counter: this.state.counter + 1});
  }

  onDecrement = (): void => {
    this.setState({counter: this.state.counter - 1});
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <li key={todo.id}>
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
export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(AppComponent);


//ReactDOM.render(<App />, document.querySelector('#root'));

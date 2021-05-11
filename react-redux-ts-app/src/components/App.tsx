import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: any;
}

class _App extends React.Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

   renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    <div>
      <button onClick={this.onButtonClick}>Fetch</button>
      {this.renderList()}
    </div>
  }
}

// this is going to return some object that has todos properties
// and the value of it is going to be an array of todos
// + desctructure
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// wire all together with connect
// (configuration) + (_App component)
export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);
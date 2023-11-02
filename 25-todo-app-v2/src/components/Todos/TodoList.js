import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo,toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      <hr />
      {!todos.length ? (
        <h3>list is empty, add something</h3>
      ) : (
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>;
        })
      )}
    </div>
  );
}

export default TodoList;

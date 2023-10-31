import styles from "./Todo.module.css";
import { RiTodoFill } from "react-icons/ri";

function Todo({ todo, deleteTodo }) {
  console.log(todo);

  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  );
}

export default Todo;

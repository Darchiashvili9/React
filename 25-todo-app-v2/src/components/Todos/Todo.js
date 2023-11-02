import styles from "./Todo.module.css";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import {FaCheck} from 'react-icons/fa';

function Todo({ todo, deleteTodo }) {
  console.log(todo);

  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      
      <RiDeleteBin2Line className={styles.deleteIcon}/>
      <FaCheck className={styles.checkIcon}/>

    </div>
  );
}

export default Todo;

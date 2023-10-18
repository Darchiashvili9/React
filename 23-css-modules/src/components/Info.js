import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

function Info() {
  return (
    <div className={styles.Info}>
      <h1>info component</h1>
      <button className={styles.myOtherButton}>info component button</button>
    </div>
  );
}

export default Info;

import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";

export function EmailEditor() {
  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptate debitis provident tempore rerum animi odio distinctio
          laboriosam ab natus voluptatum.
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={17} />
            </button>
            <button>
              <Bold size={17} />
            </button>
            <button>
              <Italic size={17} />
            </button>
            <button>
              <Underline size={17} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}

import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import { useRef, useState } from "react";

export function EmailEditor() {
  const [text, setText] =
    useState(`Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Voluptate debitis provident tempore rerum animi odio distinctio
  laboriosam ab natus voluptatum.`);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const getSelectionText = () => {
    if (!textRef.current) return;
    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;
    const selectedText = text.substring(cursorStart, cursorEnd);

    if (!selectedText) return;
  };

  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          value={text}
          onChange={e => setText(e.target.value)}
          onClick={getSelectionText}
        >
          {text}
        </textarea>
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

import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
// import { useRef, useState } from "react";
// import { TStyle, applyStyle } from "./apply-style";
import parse from "html-react-parser";
import { useEditor } from "./useEditor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email.servise";

export function EmailEditor() {
  const { text, setText, textRef, applyFormat, updateSelection } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      setText("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return (
    <div>
      <h1>Email Editor</h1>
      {text && <div className={styles.preview}>{parse(text)}</div>}
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onSelect={updateSelection}
        >
          {text}
        </textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText("")}>
              <Eraser size={17} />
            </button>
            <button onClick={() => applyFormat("bold")}>
              <Bold size={17} />
            </button>
            <button onClick={() => applyFormat("italic")}>
              <Italic size={17} />
            </button>
            <button onClick={() => applyFormat("underline")}>
              <Underline size={17} />
            </button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}

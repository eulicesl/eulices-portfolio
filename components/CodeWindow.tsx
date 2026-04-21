import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";

type Props = {
  code: string;
  lang: string;
  fileName: string;
  note?: string;
};

export async function CodeWindow({ code, lang, fileName, note }: Props) {
  const hast = await codeToHast(code, {
    lang,
    theme: "github-dark-default",
  });
  const rendered = toJsxRuntime(hast, {
    Fragment,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsx: jsx as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsxs: jsxs as any,
  });

  return (
    <div className="code-window">
      <div className="code-header">
        <span className="code-dots" aria-hidden="true">
          <span className="code-dot code-dot-red" />
          <span className="code-dot code-dot-yellow" />
          <span className="code-dot code-dot-green" />
        </span>
        <span className="code-filename">{fileName}</span>
      </div>
      <div className="code-body">{rendered}</div>
      {note ? <div className="code-footer">{note}</div> : null}
    </div>
  );
}

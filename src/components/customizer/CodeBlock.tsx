"use client";

import { type Key } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface Props {
  code: string;
  language: "css" | "html" | "tsx" | "javascript";
}

/**
 * Syntax-highlighted code block using prism-react-renderer.
 * Uses the vsDark theme for a premium dark code editor look.
 */
export function CodeBlock({ code, language }: Props) {
  return (
    <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="m-0 max-w-full overflow-x-auto p-3 pt-10 font-mono text-[10px] leading-relaxed wrap-anywhere whitespace-pre-wrap squircle-element"
          style={{ ...style, background: "transparent", margin: 0 }}
        >
          {tokens.map((line, i) => {
            const { key: lineKey, ...lineProps } = getLineProps({ line, key: i });
            return (
              <div key={(lineKey ?? i) as Key} {...lineProps} className="min-w-0">
                <span className="mr-2 inline-block w-5 shrink-0 select-none text-right text-[9px] text-white/20 md:mr-3 md:w-6">
                  {i + 1}
                </span>
                {line.map((token, j) => {
                  const { key: tokenKey, ...tokenProps } = getTokenProps({ token, key: j });
                  return <span key={(tokenKey ?? j) as Key} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}

import * as React from "react";

function IconCodeWorkingOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M282 256 A26 26 0 0 1 256 282 A26 26 0 0 1 230 256 A26 26 0 0 1 282 256 z" />
      <path d="M372 256 A26 26 0 0 1 346 282 A26 26 0 0 1 320 256 A26 26 0 0 1 372 256 z" />
      <path d="M192 256 A26 26 0 0 1 166 282 A26 26 0 0 1 140 256 A26 26 0 0 1 192 256 z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 368L32 256l128-112M352 368l128-112-128-112"
      />
    </svg>
  );
}

export default IconCodeWorkingOutline;
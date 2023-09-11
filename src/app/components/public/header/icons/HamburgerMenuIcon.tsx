import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function HamburgerMenuIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      stroke="#fff"
      viewBox="-2 -2 24 24"
      {...props}>
      <title>{"hamburger"}</title>
      <path
        fill="#FFF"
        fillRule="evenodd"
        stroke="none"
        d="M19 8H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2Zm0 8H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2ZM1 2h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}

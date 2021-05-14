import React, { FunctionComponent } from "react";

interface Props {
  justify?: "start" | "center" | "end" | undefined;
  content?: "start" | "center" | "end" | undefined;
  items?: "start" | "center" | "end" | undefined;
  direction?: "row" | "col" | undefined;
  className?: string;
}

const Center: FunctionComponent<Props> = ({
  justify = "center",
  content = "center",
  items = "center",
  direction = "row",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} content-${content} items-${items} ${className}`}
    >
      {props.children}
    </div>
  );
};

export default Center;

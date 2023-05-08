import * as React from "react";

export const Header = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h1 className={className}>{text}</h1>;
};

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NormalLayout({ children }: Props) {
  return (
    <div>
      <h2> This is the normal-layout </h2>
      <div style={{ background: "grey", padding: "2em" }}>{children}</div>
    </div>
  );
}

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <div>
      <h2> This is the about page layout</h2>
      <div style={{ background: "red" }}>{children}</div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

type Props = {};

export default function Nav({}: Props) {
  return (
    <header>
      <p>This is the header</p>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about/inside"}>Inside </Link>
        <Link href={"/data"}>Data </Link>
        <Link href={"/refresh"}>Quote </Link>
      </nav>
    </header>
  );
}

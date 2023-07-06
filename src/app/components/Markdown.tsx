"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  md: string;
};

export default function Markdown({ md }: Props) {
  return <ReactMarkdown>{md}</ReactMarkdown>;
}

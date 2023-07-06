"use client";
import React, { useState } from "react";

type Props = {};

export default function Counter({}: Props) {
  const [counter, _] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          _((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          _((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

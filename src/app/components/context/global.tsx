"use client";
import React, { Children, createContext, useState } from "react";

export const GlobalContext = createContext();

type Globals = {
  status: number;
  condition: string;
};

type GlobalPropType = {
  defaultVal?: Globals;
  children: React.ReactNode;
};

export default function GlobalProvider(props: GlobalPropType) {
  const state = useState<Globals>(
    props.defaultVal || { status: 200, condition: "Loaded" }
  );
  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
}

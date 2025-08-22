"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { TheStor } from "./store";

export function ProviderLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <Provider store={TheStor}>{children}</Provider>;
}

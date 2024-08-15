"use client";
import Test from "@/app/_components/test";
import { TestProvider } from "@/app/contexts/testContext";
import React from "react";

export default function Start() {
  return (
    <div>
      <TestProvider>
        <Test />
      </TestProvider>
    </div>
  );
}

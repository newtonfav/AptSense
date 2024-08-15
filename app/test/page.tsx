"use client";
import StartScreen from "../_components/start-screen";
import { TestProvider } from "../contexts/testContext";

export default function AptitudeTest() {
  return (
    <div>
      <TestProvider>
        <StartScreen />
      </TestProvider>
    </div>
  );
}

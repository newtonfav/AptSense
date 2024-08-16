import { ClockIcon } from "@heroicons/react/24/solid";
import { useTest } from "../contexts/testContext";
import { useEffect } from "react";

export default function Timer() {
  const { dispatch, secondsRemaining } = useTest();

  const minutes = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = secondsRemaining ?? 0 % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="self-center font-semibold text-xl">
      <div className="inline-flex items-center gap-1">
        <ClockIcon className="w-8 fill-primary-400" />
        <span>
          {minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </span>
      </div>
    </div>
  );
}

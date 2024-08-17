import { ClockIcon } from "@heroicons/react/24/solid";
import { useTest } from "../contexts/testContext";
import { useEffect } from "react";
import AnimatedTimerIcon from "./animated-timer-icon";

export default function Timer() {
  const { dispatch, timerIsPaused, secondsRemaining } = useTest();

  const minutes = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = (secondsRemaining ?? 0) % 60;

  useEffect(
    function () {
      if (timerIsPaused) return;

      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, timerIsPaused]
  );

  return (
    <div className="self-center font-semibold text-xl">
      <div className="inline-flex items-center gap-1">
        {timerIsPaused ? (
          <ClockIcon className="w-8 fill-primary-400" />
        ) : (
          <AnimatedTimerIcon />
        )}
        <span>
          {minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </span>
      </div>
    </div>
  );
}

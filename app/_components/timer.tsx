import { ClockIcon } from "@heroicons/react/24/solid";

export default function Timer() {
  return (
    <div className="self-center font-semibold text-xl">
      <div className="inline-flex items-center gap-1">
        <ClockIcon className="w-8 fill-primary-400" />
        <span>05:00</span>
      </div>
    </div>
  );
}

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import TestComponent from "../_components/test-component";

export default function AptitudeTest() {
  return (
    <div className="justify-center flex items-center h-[75dvh] space-x-12">
      <button>
        <ChevronLeftIcon className="size-20" />
      </button>

      <TestComponent />

      <button>
        <ChevronRightIcon className="size-20" />
      </button>
    </div>
  );
}

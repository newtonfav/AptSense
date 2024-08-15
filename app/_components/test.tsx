import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import TestComponent from "../_components/test-component";
import { useTest } from "../contexts/testContext";

export default function Test() {
  const { isLoading } = useTest();

  console.log(isLoading);

  return (
    <div>
      <div className="justify-center flex items-center h-[75dvh] space-x-12">
        <button>
          <ChevronLeftIcon className="size-20" />
        </button>

        <TestComponent />

        <button>
          <ChevronRightIcon className="size-20" />
        </button>
      </div>
    </div>
  );
}

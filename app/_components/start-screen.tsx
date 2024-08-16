"use client";
import { useRouter } from "next/navigation";

export default function StartScreen() {
  const router = useRouter();

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    router.push("/test/start");
  }

  return (
    <div className="   justify-center h-[75dvh] space-x-12  flex flex-col items-center select-none mb-8">
      <div className="bg-primary-200 rounded-[0.75rem] text-center p-20 text-base space-y-4">
        <div className="text-2xl font-semibold">Welcome to AptSense</div>
        <div>Aptitude questions to test your aptitude prowess</div>

        <div className="mb-6"></div>

        <button
          onClick={handleClick}
          className="bg-primary-400 px-5 py-2 text-white rounded-[0.75rem] hover:bg-primary-500"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

import { useState } from "preact/hooks";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="flex justify-center items-center my-8">
      <button
        type="button"
        class="px-4 py-2 font-semibold rounded rounded-r-none bg-slate-700 border border-white flex items-center justify-center"
        onClick={() => setCount((count) => count - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
      <span class="text-base font-bold text-white px-4 py-2 border-t border-b">
        {count}
      </span>
      <button
        type="button"
        class="px-4 py-2 font-semibold rounded rounded-l-none bg-slate-700 border border-white flex items-center justify-center"
        onClick={() => setCount((count) => count + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </div>
  );
};

interface Props {
  isActive: boolean;
  onChange: () => void;
}

export default function Switch({ isActive, onChange }: Props) {
  return (
    <button
      type="button"
      aria-label={isActive ? "Desactivate" : "Activate"}
      aria-pressed={isActive}
      className={`h-5 w-9 cursor-pointer rounded-full bg-neutral-300 p-0.5 dark:bg-neutral-600 ${isActive && "bg-red-700 dark:bg-red-400"}`}
      onClick={onChange}
    >
      <span
        className={`bg-neutral-0 block size-4 rounded-full shadow-[0px_1px_3px_0px_rgba(10,13,18,0.15),rgba(0px_1px_2px_-1px_rgba(10,13,18,0.15))] transition-transform duration-500 ease-in-out dark:shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),rgba(0px_1px_2px_-1px_rgba(9,21,64,0.6))] ${isActive && "translate-x-full shadow-[0px_1px_3px_0px_rgba(10,13,18,0.30),rgba(0px_1px_2px_-1px_rgba(10,13,18,0.3))]"}`}
      ></span>
    </button>
  );
}

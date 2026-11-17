interface Props {
  label: string;
  isActive: boolean;
  onSelect: () => void;
}

export default function StatusFilter({ label, isActive, onSelect }: Props) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      className={`bg-neutral-0 dark:text-neutral-0 text-preset-3 flex cursor-pointer items-center justify-center rounded-full border border-neutral-200 px-5 pt-2 pb-2.5 shadow-[0px_1px_2px_0px_rgba(184,196,215,0.4)] outline-none hover:opacity-70 focus:border-transparent focus:shadow-[0px_0px_0px_2px_var(--color-neutral-200),0px_0px_0px_4px_var(--color-red-400)] dark:border-neutral-600 dark:bg-neutral-700 dark:shadow-none dark:hover:bg-neutral-600 dark:hover:opacity-100 dark:focus:shadow-[0px_0px_0px_2px_var(--color-neutral-900),0px_0px_0px_4px_var(--color-red-400)] ${isActive && "text-neutral-0 text-preset-4 border-transparent bg-red-700 shadow-none hover:bg-red-500 hover:opacity-100 focus:shadow-[0px_0px_0px_2px_var(--color-neutral-0),0px_0px_0px_4px_var(--color-red-400)] dark:border-transparent dark:bg-red-400 dark:text-neutral-900 dark:hover:bg-red-500 dark:focus:shadow-[0px_0px_0px_2px_var(--color-neutral-900),0px_0px_0px_4px_var(--color-red-400)]"}`}
      onClick={onSelect}
    >
      <span className="text-center">{label}</span>
    </button>
  );
}

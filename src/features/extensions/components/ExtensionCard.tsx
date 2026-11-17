import type { Extension } from "@/features/extensions/types";
import Switch from "@/shared/components/Switch";
import { motion } from "motion/react";

interface Props {
  extension: Extension;
  onStatusChange: () => void;
  onRemove: () => void;
}

export default function ExtensionCard({
  extension,
  onStatusChange,
  onRemove,
}: Props) {
  return (
    <motion.article
      exit={{ opacity: 0 }}
      className="rounded-20 bg-primary flex flex-col gap-y-6 border border-neutral-200 px-5 py-5 shadow-[0px_2px_2px_0px_rgba(194,206,225,0.2),0px_1px_5px_1px_rgba(194,206,225,0.22)] dark:border-neutral-600 dark:shadow-none"
    >
      <div className="flex gap-x-4">
        <motion.img
          exit={{ y: -20 }}
          src={extension.logo}
          alt={`${extension.name} logo`}
          className="rounded-10 size-15"
        />
        <div className="flex flex-col gap-y-2">
          <motion.p exit={{ x: 20 }} className="text-preset-2 text-secondary">
            {extension.name}
          </motion.p>
          <motion.p
            exit={{ x: 20 }}
            className="text-preset-5 text-foreground min-h-[3lh]"
          >
            {extension.description}
          </motion.p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="text-preset-6 border-foreground hover:text-neutral-0 text-secondary cursor-pointer rounded-full border px-4 py-2 outline-none hover:border-transparent hover:bg-red-700 focus:border-transparent focus:bg-neutral-100 focus:shadow-[0px_0px_0px_2px_#fff,0px_0px_0px_4px_var(--color-red-700)] dark:hover:bg-red-400 dark:hover:text-neutral-900 dark:focus:bg-neutral-600 dark:focus:shadow-[0px_0px_0px_2px_var(--color-neutral-900),0px_0px_0px_4px_var(--color-red-400)]"
          onClick={onRemove}
        >
          Remove
        </button>
        <Switch isActive={extension.isActive} onChange={onStatusChange} />
      </div>
    </motion.article>
  );
}

import type { Extension } from "@/features/extensions/types";
import Switch from "@/shared/components/Switch";

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
    <article className="rounded-20 bg-primary flex flex-col gap-y-6 border border-neutral-200 px-5 py-5 shadow-[0px_2px_2px_0px_rgba(194,206,225,0.2),0px_1px_5px_1px_rgba(194,206,225,0.22)] dark:border-neutral-600 dark:shadow-none">
      <div className="flex gap-x-4">
        <img
          src={extension.logo}
          alt={`${extension.name} logo`}
          className="rounded-10 size-15"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-preset-2 text-secondary">{extension.name}</p>
          <p className="text-preset-5 text-foreground min-h-[3lh]">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="text-preset-6 border-foreground hover:text-neutral-0 text-secondary cursor-pointer rounded-full border px-4 py-2 hover:border-transparent hover:bg-red-700 dark:hover:bg-red-400 dark:hover:text-neutral-900"
          onClick={onRemove}
        >
          Remove
        </button>
        <Switch isActive={extension.isActive} onChange={onStatusChange} />
      </div>
    </article>
  );
}

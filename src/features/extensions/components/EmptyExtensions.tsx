import { NoExtensionsIcon } from "@/shared/icons/NoExtensionsIcon";

export default function EmptyExtensions() {
  return (
    <div className="col-span-3 flex flex-col items-center justify-center gap-3">
      <NoExtensionsIcon className="size-20 text-neutral-900 dark:text-neutral-100" />
      <p className="text-preset-2 text-secondary">No extensions found</p>
    </div>
  );
}

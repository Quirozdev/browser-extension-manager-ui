import { NoExtensionsIcon } from "@/shared/icons/NoExtensionsIcon";

export default function EmptyExtensions() {
  return (
    <div
      role="status"
      className="col-span-full flex flex-col items-center justify-center gap-3"
    >
      <NoExtensionsIcon
        aria-hidden="true"
        className="size-20 text-neutral-900 dark:text-neutral-100"
      />
      <p className="text-preset-2 text-secondary">No extensions found</p>
    </div>
  );
}

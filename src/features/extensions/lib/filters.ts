import type { Extension, FilterOption } from "@/features/extensions/types";

export function filterExtensions(
  extensions: Extension[],
  filter: FilterOption,
) {
  if (filter === "all") {
    return extensions;
  } else {
    return extensions.filter((ext) => {
      return filter === "active" ? ext.isActive : !ext.isActive;
    });
  }
}

import StatusFilter from "@/features/extensions/components/StatusFilter";
import { filters } from "@/features/extensions/constants/filters.const";
import type { FilterOption } from "@/features/extensions/types";
import { useState } from "react";

export default function ExtensionsList() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  return (
    <section className="flex flex-col gap-y-10 md:gap-y-8">
      <div className="flex flex-col items-center gap-y-6 md:flex-row md:justify-between md:gap-x-12">
        <h1 className="text-preset-1 text-secondary">Extensions List</h1>
        <div className="flex items-center gap-x-3">
          {filters.map((filter) => {
            return (
              <StatusFilter
                key={filter.value}
                label={filter.label}
                isActive={activeFilter === filter.value}
                onSelect={() => setActiveFilter(filter.value)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

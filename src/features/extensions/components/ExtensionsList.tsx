import EmptyExtensions from "@/features/extensions/components/EmptyExtensions";
import ExtensionCard from "@/features/extensions/components/ExtensionCard";
import StatusFilter from "@/features/extensions/components/StatusFilter";
import { filters } from "@/features/extensions/constants/filters.const";
import { filterExtensions } from "@/features/extensions/lib/filters";
import { extensions as data } from "@/features/extensions/model/data";
import type { Extension, FilterOption } from "@/features/extensions/types";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ExtensionsList() {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredExtensions = filterExtensions(extensions, activeFilter);

  function toggleExtensionStatus(extension: Extension) {
    setExtensions((current) => {
      return current.map((ext) => {
        if (ext.name === extension.name) {
          return { ...extension, isActive: !extension.isActive };
        }
        return ext;
      });
    });
  }

  function removeExtension(extension: Extension) {
    setExtensions((current) => {
      return current.filter((ext) => {
        return ext.name !== extension.name;
      });
    });
  }

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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {filteredExtensions.length > 0 ? (
            filteredExtensions.map((ext) => {
              return (
                <ExtensionCard
                  key={ext.name}
                  extension={ext}
                  onStatusChange={() => toggleExtensionStatus(ext)}
                  onRemove={() => removeExtension(ext)}
                />
              );
            })
          ) : (
            <EmptyExtensions />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

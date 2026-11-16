export type FilterOption = "all" | "active" | "inactive";

export interface Filter {
  label: string;
  value: FilterOption;
}

export type FilterOption = "all" | "active" | "inactive";

export interface Filter {
  label: string;
  value: FilterOption;
}

export interface Extension {
  name: string;
  description: string;
  isActive: boolean;
  logo: string;
}

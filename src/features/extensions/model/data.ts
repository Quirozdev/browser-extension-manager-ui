import type { Extension } from "@/features/extensions/types";
import DevLensLogo from "@/assets/images/logo-devlens.svg";
import StyleSpyLogo from "@/assets/images/logo-style-spy.svg";
import SpeedBoostLogo from "@/assets/images/logo-speed-boost.svg";
import JSONWizardLogo from "@/assets/images/logo-json-wizard.svg";
import TabMasterProLogo from "@/assets/images/logo-tab-master-pro.svg";
import ViewportBuddyLogo from "@/assets/images/logo-viewport-buddy.svg";
import MarkupNotesLogo from "@/assets/images/logo-markup-notes.svg";
import GridGuidesLogo from "@/assets/images/logo-grid-guides.svg";
import PalettePickerLogo from "@/assets/images/logo-palette-picker.svg";
import LinkCheckerLogo from "@/assets/images/logo-link-checker.svg";
import DOMSnapshotLogo from "@/assets/images/logo-dom-snapshot.svg";
import ConsolePlusLogo from "@/assets/images/logo-console-plus.svg";

export const extensions: Extension[] = [
  {
    logo: DevLensLogo,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: StyleSpyLogo,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: SpeedBoostLogo,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: JSONWizardLogo,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: TabMasterProLogo,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: ViewportBuddyLogo,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: MarkupNotesLogo,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: GridGuidesLogo,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: PalettePickerLogo,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: LinkCheckerLogo,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: DOMSnapshotLogo,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: ConsolePlusLogo,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

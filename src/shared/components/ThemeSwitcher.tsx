import { useTheme } from "@/shared/hooks/use-theme";
import SunIcon from "@/assets/images/icon-sun.svg";
import MoonIcon from "@/assets/images/icon-moon.svg";

export default function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      aria-label={`Change theme to ${theme === "light" ? "dark" : "light"}`}
      className="rounded-12 flex size-12.5 cursor-pointer items-center justify-center bg-neutral-100 text-green-300 outline-none hover:bg-neutral-300 focus:shadow-[0px_0px_0px_2px_var(--color-neutral-0),0px_0px_0px_4px_var(--color-red-400)] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:focus:shadow-[0px_0px_0px_2px_var(--color-neutral-800),0px_0px_0px_4px_var(--color-red-400)]"
      onClick={() => {
        changeTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <img src={theme === "light" ? MoonIcon : SunIcon} alt="" />
    </button>
  );
}

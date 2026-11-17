import Logo from "@/shared/components/header/Logo";
import ThemeSwitcher from "@/shared/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="bg-primary rounded-10 dark flex items-center justify-between border border-neutral-200 px-3 py-2 shadow-[0px_2px_3px_0px_#D9E5F4] md:px-4 md:py-3 dark:border-transparent dark:shadow-none">
      <a href="/browser-extension-manager-ui/">
        <Logo />
      </a>
      <ThemeSwitcher />
    </header>
  );
}

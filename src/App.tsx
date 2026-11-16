import { useTheme } from "@/shared/hooks/use-theme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="min-h-screen w-full">
      <div className="text-red-500">xd</div>
      <button
        className="text-green-300"
        onClick={() => {
          changeTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme}
      </button>
    </div>
  );
}

export default App;

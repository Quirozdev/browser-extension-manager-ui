import ExtensionsList from "@/features/extensions/components/ExtensionsList";
import Header from "@/shared/components/header/Header";

function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-y-10 px-4 pt-5 pb-16 md:px-8 md:pt-6 xl:gap-y-16 xl:pt-10">
      <Header />
      <main>
        <ExtensionsList />
      </main>
    </div>
  );
}

export default App;

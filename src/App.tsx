import ArticleSection from "./components/ArticleSection/ArticleSection";
import HeroSection from "./components/HeroSection/HeroSection";
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <div
      className="
        m-auto mb-10 min-h-screen w-full max-w-6xl px-4"
    >
      <AppBar />
      <HeroSection />
      <ArticleSection />
    </div>
  );
}

export default App;

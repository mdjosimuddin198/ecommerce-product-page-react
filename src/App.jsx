import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar />
        <hr className="mt-4 text-gray-500 hidden md:block" />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

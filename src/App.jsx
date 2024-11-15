import { useState } from "react";
import "./App.css";

import data from "./assets/data/emojis.json";

import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [keywords, setKeywords] = useState("");

  return (
    <>
      <header>
        <Search keywords={keywords} setKeywords={setKeywords} />
      </header>
      <main className="container">
        <Line data={data} keywords={keywords} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

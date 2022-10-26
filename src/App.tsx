import Komponent from "./components/Komponent";
import "@navikt/ds-css";
import "./App.css";

function App() {
  const tekst = "Dette kan bli en awesome mikrofrontend for ditt team! 😊 🎉";

  return (
    <main className="main">
      <div className="app">
        <Komponent tekst={tekst} />
      </div>
    </main>
  );
}

export default App;

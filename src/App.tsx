import Komponent from "./components/Komponent";
import "@navikt/ds-css";
import "./App.css";

function App() {
  const tekst = "Dette kan bli en awesome mikrofrontend for ditt team! 😊 🎉";

  return <Komponent tekst={tekst} />;
}

export default App;

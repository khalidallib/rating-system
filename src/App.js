import Star from "./components/Star";
import "./css/index.css";

function App() {
  return (
    <main className="app">
      <h1>Star Rating System</h1>
      <Star />
      <button className="dialog-button">
        Open Dialog
      </button>
    </main>
  );
}

export default App;
import StarRating from "./components/StarRating";
import "./css/index.css";

function App() {
  return (
    <main className="app">
      <h1>Star Rating System</h1>
      <StarRating />
      <button className="dialog-button">
        Open Dialog
      </button>
    </main>
  );
}

export default App;
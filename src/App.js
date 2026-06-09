import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import "./css/index.css";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <StarRating />

      <button onClick={() => setShowDialog(true)}>
        Open Dialog
      </button>

      {showDialog && (
        <Dialog onClose={() => setShowDialog(false)} />
      )}
    </div>
  );
}

export default App;
import Board from "./Components/Board.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return <Board />;
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

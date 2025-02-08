import React from "react";
import ReactDOM from "react-dom/client"; // 👈 'react-dom/client' سے import کریں
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // 👈 createRoot use کریں
root.render(<App />);

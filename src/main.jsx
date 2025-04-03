import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./styles/index.css"; // Update the path to point to the correct location
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
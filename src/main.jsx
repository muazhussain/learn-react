import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function MyHeader() {
  return (
    <main>
      <h1>Hello</h1> <h1>Hello</h1>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyHeader></MyHeader>
  </StrictMode>
);

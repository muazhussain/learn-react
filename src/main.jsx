import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <main>
      <img src="/src/assets/react-logo.png" alt="react-logo" width="80px" />
      <h1>Fun Fact About React!</h1>
      <ul>
        <li>Was First Release in 2013!</li>
        <li>Was Originally Created By Jordan!</li>
        <li>Has well overall 200K stars on Github</li>
        <li>Is Maintained By Meta</li>
        <li>Powers thousands of web apps, including mobile apps!</li>
      </ul>
    </main>
  </StrictMode>
);

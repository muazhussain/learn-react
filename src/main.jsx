import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<Page />);

function Page() {
  return (
    <>
      <h1>Hello React!</h1>
      <h2>Welcome Back!</h2>
    </>
  );
}

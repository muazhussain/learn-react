import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<WhyIAmLearningReact />);

function WhyIAmLearningReact() {
  return (
    <main>
      <h3>Why I am learning React: </h3>
      <ol>
        <li>For handling monitoring tool</li>
        <li>For becoming a true full stack engineer</li>
        <li>Make me more an independent person</li>
      </ol>
    </main>
  );
}

import { createRoot } from "react-dom/client";
import { Fragment } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <Header />
    <Body />
    <Footer />
  </Fragment>
);

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="" width="80px" />
    </header>
  );
}

function Body() {
  return (
    <main>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>It's very popular framework</li>
        <li>It gives an easier way to build frontend for web application</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>All rights reserved.</p>
    </footer>
  );
}

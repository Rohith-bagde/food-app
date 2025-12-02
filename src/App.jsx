import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Body />
      </main>
    </div>
  );
};

export default App;

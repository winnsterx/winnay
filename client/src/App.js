import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Desktop from "./components/Desktop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Desktop />
      </DndProvider>
    </div>
  );
}

export default App;

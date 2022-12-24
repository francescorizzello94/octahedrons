import React from "react";
import "./App.css";
import OctahedronApp from "./components/Octahedron.jsx";
import { Controls } from "react-three-gui";
import { extend } from "@react-three/fiber";
extend({ Controls });

function App() {
  return (
    <div className="wrapper">
      <OctahedronApp />
    </div>
  );
}

export default App;

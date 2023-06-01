import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BookingsCalendar } from "./components/BookingsCalendar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BookingsCalendar></BookingsCalendar>
    </div>
  );
}

export default App;

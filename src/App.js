import "./App.css";
import Todolist from "./components/Todolist";
import Header from "./components/Header";
import { useState } from "react";
import GlobalStyle from "./components/css/GlobalStyle";
import { DarkModeProvide } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvide>
      <GlobalStyle />
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todolist filter={filter} />
    </DarkModeProvide>
  );
}

export default App;

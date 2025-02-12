import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import AppRoutes from "./routes";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  )
}

export default App
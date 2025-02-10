import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import ItemsList from './components/Items/ItemsList'
import Counter from './components/Counter'
import Header from "./layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemsList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
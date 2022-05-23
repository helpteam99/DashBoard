import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DashBoard, Login } from "./Components/Layout";
import "./styles/globale.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

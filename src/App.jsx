import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactPage } from "./Pages/ContactPage";
import { MainPage } from "./Pages/MainPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

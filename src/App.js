import Header from "./components/Header";
import ProductsDirectoryPage from "./pages/ProductsDirectoryPage";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="products" element={<ProductsDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

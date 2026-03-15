import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import CasesPage from "./pages/CasesPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="cases" element={<CasesPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="news" element={<NewsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExpeditionsPage from "./pages/ExpeditionsPage";
import ShipwrecksPage from "./pages/ShipwrecksPage";
import EquipmentPage from "./pages/EquipmentPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="expeditions" element={<ExpeditionsPage />} />
        <Route path="shipwrecks" element={<ShipwrecksPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
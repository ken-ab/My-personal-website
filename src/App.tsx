import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/portfolio/Navbar";
import { RouteMetadata } from "./components/portfolio/RouteMetadata";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { Contact } from "./pages/Contact";
import { Engineering } from "./pages/Engineering";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Research } from "./pages/Research";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <RouteMetadata />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Research />} path="/research" />
        <Route element={<Engineering />} path="/engineering" />
        <Route element={<Experience />} path="/experience" />
        <Route element={<CaseStudyPage />} path="/brief/:id" />
        <Route element={<Navigate replace to="/research" />} path="/publications" />
        <Route element={<Navigate replace to="/research" />} path="/applications" />
        <Route element={<Navigate replace to="/engineering" />} path="/development-projects" />
        <Route element={<Navigate replace to="/experience" />} path="/projects" />
        <Route element={<Navigate replace to="/experience" />} path="/internship-awards" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </HashRouter>
  );
}

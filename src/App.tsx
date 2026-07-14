import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/portfolio/Navbar";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";
import { Applications } from "./pages/Applications";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { Contact } from "./pages/Contact";
import { DevelopmentProjects } from "./pages/DevelopmentProjects";
import { Home } from "./pages/Home";
import { Projects } from "./pages/InternshipAwards";
import { schedulePublicationImagePreload } from "./utils/publicationImagePreload";

export default function App() {
  useEffect(() => schedulePublicationImagePreload(), []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Applications />} path="/publications" />
        <Route element={<CaseStudyPage />} path="/brief/:id" />
        <Route element={<Navigate replace to="/publications" />} path="/applications" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Navigate replace to="/projects" />} path="/internship-awards" />
        <Route element={<DevelopmentProjects />} path="/development-projects" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </HashRouter>
  );
}

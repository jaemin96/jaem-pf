import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { PFLayout } from "../components";
import {
  HomePage,
  ErrorPage,
  AboutPage,
  ProjectPage,
  ExperiencePage,
  ContactPage,
} from "../pages";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {/* Main Service */}
          <Route element={<PFLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          <Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

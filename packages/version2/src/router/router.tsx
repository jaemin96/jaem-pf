import { Suspense } from "react";
import { Routes, Route } from "react-router";
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
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

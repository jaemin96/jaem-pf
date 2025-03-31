import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { HomePage, ErrorPage, IntroPage, ProjectPage } from "../pages";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

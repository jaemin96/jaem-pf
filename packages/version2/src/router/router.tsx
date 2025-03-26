import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { HomePage, ErrorPage } from "../pages";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

import React, { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../containers/loader/Loader";
import { routesConstatnt } from "./routsConstant";

const AppRouts: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div>
          <Routes>
            {routesConstatnt.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouts;

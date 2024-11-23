import React, { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./assets/css/Common.css";
import { Provider } from "react-redux";
import store from "./store/redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <MainLayout />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;

import { css } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component from "./pages/1_component/Component";
import UseState from "./pages/2_usestate/UseState";
import UseEffect from "./pages/3_useeffect/UseEffect";
import ReduxToolkit from "./pages/4_reduxtoolkit/ReduxToolkit";
import ReactRouter from "./pages/5_router/Router";
import Other from "./pages/6_other/Other";
import Main from "./pages/Main";
import SideMenu from "./pages/SideMenu";
import { store } from "./store/store";

const App: React.VFC = () => {
  return (
    <div
      css={css`
        background-color: #eaeef3;
        padding: 78px 16px 16px 16px;
        min-height: 100%;
      `}
    >
      <Provider store={store}>
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route path={`/main`} element={<Main />} />
            <Route path={`/component`} element={<Component />} />
            <Route path={`/usestate`} element={<UseState />} />
            <Route path={`/useeffect`} element={<UseEffect />} />
            <Route path={`/reduxtoolkit`} element={<ReduxToolkit />} />
            <Route path={`/reactrouter`} element={<ReactRouter />} />
            <Route path={`/other`} element={<Other />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
export default App;

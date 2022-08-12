import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeUseState from "../components/HomeUseState";
import NotFoundPage from "../pages/NotFoundPage";
import UseCallbackHook from "../pages/UseCalllbackHook";
import UseContextHook from "../pages/UseContextHook";
import UseEffectHook from "../pages/UseEffectHook";
import UseInputHook from "../pages/UseInputHook";
import UseMemoHook from "../pages/UseMemoHook";
import UseRefHook from "../pages/UseRefHook";
import UseTransitionHook from "../pages/UseTransitionHook";
import { Layuout } from "./Layuout";

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuout />}>
          <Route index element={<HomeUseState />} />
          <Route path="callback" element={<UseCallbackHook />} />
          <Route path="context" element={<UseContextHook />} />
          <Route path="effect" element={<UseEffectHook />} />
          <Route path="input" element={<UseInputHook />} />
          <Route path="memo" element={<UseMemoHook />} />
          <Route path="ref" element={<UseRefHook />} />
          <Route path="transition" element={<UseTransitionHook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeUseState from "../components/HomeUseState";
import NotFoundPage from "../pages/NotFoundPage";
import UseCallbackHook from "../pages/UseCalllbackHook";
import UseContextHook from "../pages/UseContextHook";
import UseEffectHook from "../pages/UseEffectHook";
import UseInputHook from "../pages/UseInputHook";
import UseMemoHook from "../pages/UseMemoHook";
import UseRefHook from "../pages/UseRefHook";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="container bg-info">
          <Link to="/">Home-State</Link>
          <Link to="/callback">Callback</Link>
          <Link to="/context">Context</Link>
          <Link to="/effect">Effect</Link>
          <Link to="/input">Input</Link>
          <Link to="/memo">Memo</Link>
          <Link to="/ref">Ref</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomeUseState />} />
        <Route path="/callback" element={<UseCallbackHook />} />
        <Route path="/context" element={<UseContextHook />} />
        <Route path="/effect" element={<UseEffectHook />} />
        <Route path="/input" element={<UseInputHook />} />
        <Route path="/memo" element={<UseMemoHook />} />
        <Route path="/ref" element={<UseRefHook />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Navbar;

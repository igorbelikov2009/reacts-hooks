import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layuout = () => {
  return (
    <section className="container">
      <div className="navbar">
        <nav className="container bg-info">
          <Link className="link" to="/">
            Home-State
          </Link>

          <Link className="link" to="/counter">
            UseCounter
          </Link>

          <Link className="link" to="/callback">
            Callback
          </Link>

          <Link className="link" to="/context">
            Context
          </Link>

          <Link className="link" to="/effect">
            Effect
          </Link>

          <Link className="link" to="/input">
            Input
          </Link>

          <Link className="link" to="/memo">
            Memo
          </Link>

          <Link className="link" to="/ref">
            Ref
          </Link>

          <Link className="link" to="/transition">
            Transition
          </Link>
        </nav>
      </div>

      <main className="main">
        <Outlet />
      </main>

      <footer className="container">2022</footer>
    </section>
  );
};

export { Layuout };

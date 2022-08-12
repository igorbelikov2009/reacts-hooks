import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1 className="text-danger">
        Этой страницы не существует. Иди домой <Link to="/">home</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;

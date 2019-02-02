import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h2>Page not found</h2>
    <Link to="/">Go back to the main page</Link>
  </Layout>
);

export default NotFoundPage;

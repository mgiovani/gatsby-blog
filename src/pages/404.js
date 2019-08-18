import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não Encontrado" />
    <h1>NÃO ENCONTRADO</h1>
    <img src="https://http.cat/404" />
  </Layout>
);

export default NotFoundPage;

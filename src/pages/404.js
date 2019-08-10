import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NÃO ENCONTRADO</h1>
    <p>Você tentou acessar um endereço que não existe. Está perdido?</p>
  </Layout>
);

export default NotFoundPage;

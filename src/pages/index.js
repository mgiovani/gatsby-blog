import React, { Component } from 'react'
import SEO from "../components/seo";
import Layout from '../components/layout';

export default class index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO title="Giovani Moutinho">
            <h1>Bem vindo</h1>
            <a href="/blog">BLOG</a>
          </SEO>
        </Layout>
      </div>
    )
  }
}

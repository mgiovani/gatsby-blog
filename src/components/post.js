import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";
import { DiscussionEmbed } from "disqus-react"

import style from "../styles/post.module.css";

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  readingTime,
  tags,
  html,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: title },
  }

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        <div className={style.meta}>
          📆 {date} {author && <>— Escrito por {author}</>}
          <span className={style.floatRight}>
            <small>
              📖 Leitura de {readingTime} minutos
          </small>
          </span>
          {tags ? (
            <div className={style.tags}>
              {tags.map(tag => (
                <Link to={`blog/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}

        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <Link to={path} className={style.readMore}>
              Leia mais →
            </Link>
          </>
        ) : (
            <>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <Navigation
                previousPath={previousPath}
                previousLabel={previousLabel}
                nextPath={nextPath}
                nextLabel={nextLabel}
              />
              <DiscussionEmbed {...disqusConfig} />
            </>
          )}
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  readingTime: PropTypes.object,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
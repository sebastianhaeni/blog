import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import { rhythm } from "../utils/typography"
import { CommentCount } from "gatsby-plugin-disqus"
import config from "../../gatsby-config"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            style={{ borderBottom: "1px solid #ddd", marginBottom: 32 }}
          >
            <header>
              <h3
                style={{
                  marginTop: 16,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              {" | "}
              <Tags tags={node.frontmatter.tags} />
              {" | "}
              <CommentCount
                config={{
                  identifier: node.id,
                  url: `${config.siteMetadata.siteUrl}${config.pathPrefix}${node.fields.slug}`,
                  title: node.frontmatter.title,
                }}
                placeholder={"..."}
              />
              {node.frontmatter.image?.publicURL && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 16,
                  }}
                >
                  <img
                    src={node.frontmatter.image?.publicURL}
                    alt={node.frontmatter.title}
                  />
                </div>
              )}
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Underline } from "@codynhat/gatsby-theme-cactus/src/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectList() {
  const { allMdx } = useStaticQuery(ProjectListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Projects</h2>
      </Link>
      <Styled.ul>
        {allMdx.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <Underline themeColor="text" hoverThemeColor="secondary">
                {node.frontmatter.link ? (
                  <span>
                    <FontAwesomeIcon icon={faLink} size="sm" />{" "}
                  </span>
                ) : null}
                <Link
                  to={
                    node.frontmatter.link
                      ? node.frontmatter.link
                      : node.frontmatter.slug ?? node.slug
                  }
                  sx={{ variant: `links.underline` }}
                >
                  {node.frontmatter.title}
                </Link>
              </Underline>
              : {node.excerpt}
            </li>
          );
        })}
      </Styled.ul>
    </section>
  );
}

const ProjectListQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      filter: { frontmatter: { tags: { in: "project" } } }
    ) {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
            link
          }
        }
      }
    }
  }
`;

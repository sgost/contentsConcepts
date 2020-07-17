import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FeaturesSection,
  FeaturesList,
  FeatureListItem
} from './styles';

const Features = () => {

  const[content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/features.md"}) {
        childMarkdownRemark {
          frontmatter {
            features {
              id
              title
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <FeaturesSection>
          <FeaturesList>
            {
              content.features && content.features.map(dataItem =>
                <FeatureListItem key={dataItem.id}>
                  <div className="imageContainer">
                    <img src={dataItem.image.childImageSharp.fluid.src} alt="features" />
                  </div>
                  <span className="labelText">{dataItem.title}</span>
                </FeatureListItem>
              )
            }
          </FeaturesList>
        </FeaturesSection>
      }
    </Fragment>
  )
}

export default Features

import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FeaturesSection,
  FeaturesList,
  FeatureListItem
} from './styles';

export const HomeFeaturesSection = ({
  title,
  features
}) => {
  return (
    <FeaturesSection>
      <FeaturesList>
        {
          features && features.map(dataItem =>
            <FeatureListItem key={dataItem.id}>
              <div className="imageContainer">
                {
                  dataItem.image.publicURL ? <img src={dataItem.image.publicURL} alt="features" /> : <img src={dataItem.image} alt="features" />
                }
              </div>
              <span className="labelText">{dataItem.title}</span>
            </FeatureListItem>
          )
        }
      </FeaturesList>
    </FeaturesSection>
  );
};

const Features = () => {

  const [content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/features.md"}) {
        childMarkdownRemark {
          frontmatter {
            features {
              id
              title
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <HomeFeaturesSection
          title={content.title}
          features={content.features}
        />
      }
    </Fragment>
  )
}

export default Features

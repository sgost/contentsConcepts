import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FeaturesSection,
  FeaturesList,
  FeatureListItem
} from './styles';

const Features = () => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "home/features.md"}) {
        childMarkdownRemark {
          frontmatter {
            features {
              id
              title
              image
            }
          }
        }
      }
    }
  `);

  const content = data.file.childMarkdownRemark.frontmatter;

  return (
    <FeaturesSection>
      <FeaturesList>
        {
          content.features && content.features.map(dataItem =>
            <FeatureListItem key={dataItem.id}>
              <div className="imageContainer">
                <img src={require('../../images/' + dataItem.image)} alt="features" />
              </div>
              <span className="labelText">{dataItem.title}</span>
            </FeatureListItem>
          )
        }
      </FeaturesList>
    </FeaturesSection>
  )
}

export default Features

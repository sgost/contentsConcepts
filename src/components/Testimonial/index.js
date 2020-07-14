import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TestimonialSection,
  TestimonialList,
  TestimonialListItem,
  CountWrapper,
  StatusCircle
} from './styles';

const Testimonial = props => {

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "data/testimonial.json"}) {
        childDataJson {
          testimonial {
            id
            title
            count
            themeColor
          }
        }
      }
    }
  `);

  const content = data.file.childDataJson;

  return (
    <TestimonialSection>
      <TestimonialList>
        {
          content.testimonial && content.testimonial.map(dataItem =>
            <TestimonialListItem key={dataItem.id}>
              <CountWrapper>
                <StatusCircle theme={dataItem.themeColor}></StatusCircle>
                <h2>{dataItem.count.toLocaleString('en-IN')}<span className="customDot">&bull;</span></h2>
              </CountWrapper>
              <span className="titleText">{dataItem.title}</span>
            </TestimonialListItem>
          )
        }
      </TestimonialList>
    </TestimonialSection>
  )
}

export default Testimonial

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
      file(relativePath: {eq: "home/testimonial.md"}) {
        childMarkdownRemark {
          frontmatter {
            testimonials {
              id
              title
              count
              themeColor
            }
          }
        }
      }
    }
  `);

  const content = data.file.childMarkdownRemark.frontmatter;

  return (
    <TestimonialSection>
      <TestimonialList>
        {
          content.testimonials && content.testimonials.map(dataItem =>
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

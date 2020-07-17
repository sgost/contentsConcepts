import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TestimonialSection,
  TestimonialList,
  TestimonialListItem,
  CountWrapper,
  StatusCircle
} from './styles';

const Testimonial = props => {

  const[content, setContent] = useState({});

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

  useEffect(() => {
    if(data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
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
      }
    </Fragment>
  )
}

export default Testimonial

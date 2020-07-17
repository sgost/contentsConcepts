import React, { Fragment, useState, useEffect } from "react"
import QuoteLeft from "../../images/quote_left.svg"
import { graphql, useStaticQuery } from "gatsby"
import {
  CustomersSection,
  SectionHeading,
  CustomersList,
  Customer,
  CircleImage,
  WrapperDetails,
  ContentBg,
  CustomerDetails
} from './styles';

const Customers = props => {

  const[customersContent, setCustomersContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/customers.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            customers {
              id
              name
              comment
              role
              company
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
      setCustomersContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <CustomersSection>
          <SectionHeading>
            <h2>{customersContent.title}</h2>
          </SectionHeading>
          <CustomersList>
            {
              customersContent.customers && customersContent.customers.map(dataItem =>
                <Customer key={dataItem.id}>
                  <CircleImage>
                    <img src={dataItem.image.childImageSharp.fluid.src} alt={dataItem.name} />
                  </CircleImage>
                  <WrapperDetails>
                    <ContentBg>
                      <img src={QuoteLeft} alt="quote background" />
                    </ContentBg>
                    <p>{dataItem.comment}</p>
                    <CustomerDetails>
                      <h4>{dataItem.name}</h4>
                      <span>{dataItem.role}</span>
                      <span>{dataItem.company}</span>
                    </CustomerDetails>
                  </WrapperDetails>
                </Customer>
              )
            }
          </CustomersList>
        </CustomersSection>
      }
    </Fragment>
  )
}

export default Customers

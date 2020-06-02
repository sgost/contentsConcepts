import React, { useState, useEffect, Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import MenuSection from './menu';
import Customers from "../Customers"
import Contact from "../Contact"

const EditingServices = ({ data }) => {

  const jsonUrl = 'https://mohanapriya1994.github.io/ContentConceptsData/data/';

  const[data1, setData] = useState({
    customers: {},
    contact: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      const customersData = await fetch(jsonUrl + 'customers.json').then(res => res.json());
      const contactData = await fetch(jsonUrl + 'contact.json').then(res => res.json());

      setData(data1 => ({
        ...data1,
        customers: customersData,
        contact: contactData
      }));

    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <SEO title="Editing Services" />
      <MenuSection content={data.markdownRemark} />
      <Customers content={data1.customers} />
      <Contact content={data1.contact} />
    </Fragment>
  )
}

export default EditingServices

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        highlight
        editedTypes {
          title
          types
        }
        features {
          id
          title
        }
        editingLevels {
          title
          subHeading
          levelTypes {
            title
            themeColor
          }
          levels {
            id
            title
            copy
            substantive
            developmental
          }
        }
        editingSample {
          title
          samples {
            id
            title
            description
            image
          }
        }
        editingHighlights {
          title
          highlights {
            id
            title
            description
            image
          }
        }
        quality {
          title
          description
        }
        key
        parentType
      }
    }
  }
`

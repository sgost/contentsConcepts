import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Row, Col } from "antd"
import Badge from '../../images/quality_badge.svg'

import {
  QualitySection
} from './styles';

const QualityAssurance = () => {

  const[content, setContent] = useState({
    title: '',
    html: ''
  });

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "qualityAssurance.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContent({
        title: data.file.childMarkdownRemark.frontmatter.title,
        html: data.file.childMarkdownRemark.html
      });
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        content &&
        <QualitySection>
          <Row className="qualityContent">
            <Col xs={24} sm={6} md={5} lg={5} xl={5} className="qualityBadge">
              <img src={Badge} alt="Quality badge" />
            </Col>
            <Col xs={24} sm={18} md={19} lg={19} xl={19} className="contentDesc">
              <h2>{content.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: content.html }} />
            </Col>
          </Row>
        </QualitySection>
      }
    </Fragment>
  )
}

export default QualityAssurance
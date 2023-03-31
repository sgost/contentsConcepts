import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import BannerImage from '../../images/about_banner.png';
import {
  BannerSection,
  ContentContainer,
  OverlayContainer
} from './styles';

export const AboutBannerSection = ({
  title,
  html,
  preview
}) => {
  return (
    <BannerSection>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contentSection">
          <ContentContainer>
            <h2>{title}</h2>
            {
              preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
            }
          </ContentContainer>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="resSection">
          <OverlayContainer>
            <div className="topBg"></div>
            <div className="imageContainer">
              <img src={BannerImage} alt="banner" />
            </div>
            <div className="bottomBg"></div>
          </OverlayContainer>
        </Col>
      </Row>
    </BannerSection>
  );
};

const AboutBanner = () => {

  const [content, setContent] = useState({
    title: '',
    html: ''
  });

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about/banner.md"}) {
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
    if (data.file) {
      setContent({
        title: data.file.childMarkdownRemark.frontmatter.title,
        html: data.file.childMarkdownRemark.html
      });
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file && <AboutBannerSection title={content.title} html={content.html} preview={false} />
      }
    </Fragment>
  )
}

export default AboutBanner

import React, { Fragment, useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Row, Col, Button } from "antd"

import BannerImage from '../../images/banner_image.png';
import {
  BannerSection,
  ContentContainer,
  Content,
  ServicesList,
  ImageContainer
} from './styles';
import Typed from 'react-typed';

const Banner = () => {

  const[content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/banner.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            typedWords
            content
            services {
              id
              title
              link
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
        <BannerSection>
          <Row>
            <Col xs={24} sm={24} className="mob-banner-illustration">
              <ImageContainer>
                <img src={BannerImage} alt="banner" />
              </ImageContainer>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contentSection">
              <ContentContainer>
                <Content>{content.title}</Content>
                <Content>
                  {content.content}
                  {
                    content.typedWords &&
                    <Typed
                      strings={content.typedWords && content.typedWords}
                      typeSpeed={60}
                      backSpeed={60}
                      backDelay={1200}
                      loop
                      className="typeAnimation"
                    />
                  }
                </Content>
              </ContentContainer>
              <ServicesList>
                {
                  content.services && content.services.map(dataItem =>
                    <li key={dataItem.id}>
                      <Button>
                        <Link to={"/services/" + dataItem.link}>{dataItem.title}</Link>
                      </Button>
                    </li>
                  )
                }
              </ServicesList>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="resSection">
              <ImageContainer>
                <img src={BannerImage} alt="banner" />
              </ImageContainer>
            </Col>
          </Row>
        </BannerSection>
      }
    </Fragment>
  )
}

export default Banner

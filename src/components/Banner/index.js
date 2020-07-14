import React from "react"
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

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "ContentConceptsData"}, relativePath: {eq: "data/banner.json"}) {
        childDataJson {
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
  `);

  const content = data.file.childDataJson;

  return (
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
              <Typed
                strings={content.typedWords}
                typeSpeed={60}
                backSpeed={60}
                backDelay={1200}
                loop
                className="typeAnimation"
              />
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
  )
}

export default Banner

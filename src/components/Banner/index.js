import React from "react"
import { Row, Col, Button } from "antd"

import BannerImage from '../../images/banner_image.png';
import {
  BannerSection,
  ContentContainer,
  Content,
  ServicesList,
  ImageContainer
} from './styles';

const Banner = props => {
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
            <Content>{props.content.title}</Content>
            <Content dangerouslySetInnerHTML={{__html: props.content.content}} />
          </ContentContainer>
          <ServicesList>
            {
              props.content.services && props.content.services.map(dataItem =>
                <li key={dataItem.id}>
                  <Button>{dataItem.title}</Button>
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

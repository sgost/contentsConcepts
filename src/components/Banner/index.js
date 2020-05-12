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
        <Col sm={12} md={12} lg={12} xl={12} className="contentSection">
          <ContentContainer>
            <Content>{props.data.title}</Content>
            <Content dangerouslySetInnerHTML={{__html: props.data.content}} />
          </ContentContainer>
          <ServicesList>
            {
              props.data.services && props.data.services.map(dataItem =>
                <li key={dataItem.id}>
                  <Button>{dataItem.title}</Button>
                </li>
              )
            }
          </ServicesList>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <ImageContainer>
            <img src={BannerImage} alt="banner" />
          </ImageContainer>
        </Col>
      </Row>
    </BannerSection>
  )
}

export default Banner

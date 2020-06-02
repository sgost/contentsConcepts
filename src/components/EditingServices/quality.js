import React from "react"
import { Row, Col } from "antd"
import Badge from '../../images/quality_badge.png'

import {
  QualitySection
} from './styles';

const Quality = props => {

  const content = props.content;

  return (
    <QualitySection>
      <Row className="qualityContent">
        <Col xs={24} sm={6} md={5} lg={5} xl={5} className="qualityBadge">
          <img src={Badge} alt="Quality badge" />
        </Col>
        <Col xs={24} sm={18} md={19} lg={19} xl={19} className="contentDesc">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </Col>
      </Row>
    </QualitySection>
  )
}

export default Quality

import React, { Fragment } from "react"
import { Row, Col, Button } from "antd"
import {
  LevelsSection,
  SectionHeading,
  LevelsCard,
  EditingServicesList,
  PriceContainer
} from './styles';

const PricingLevels = ({ content }) => {
  return (
    <Fragment>
      <LevelsSection>
        <SectionHeading>
          <h2>{content.title}</h2>
          <h3>{content.subHeading}</h3>
        </SectionHeading>
        <Row className="editingLevelsList">
          {
            content.pricing && content.pricing.map(level =>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} className="cardCont">
                <LevelsCard className="levelCard">
                  <div className="cardTitle" style={{background: level.themeColor}}>
                    <h4>{level.title}</h4>
                  </div>
                  <div className="cardBody">
                    <EditingServicesList>
                      {
                        level.editingServices && level.editingServices.map((service, index) =>
                          <li key={index}>{service}</li>
                        )
                      }
                    </EditingServicesList>
                    <div className="priceQuoteSection">
                      {
                        level.price &&
                        <PriceContainer>
                          <span className="usdPrice" dangerouslySetInnerHTML={{__html: level.price.usd}} />
                          <span className="inrPrice" dangerouslySetInnerHTML={{__html: level.price.inr}} />
                        </PriceContainer>
                      }
                      <Button type="primary" style={{background: level.themeColor}} className="cardBtn">Get Quote</Button>
                    </div>
                  </div>
                </LevelsCard>
              </Col>
            )
          }
        </Row>
      </LevelsSection>
    </Fragment>
  )
}

export default PricingLevels

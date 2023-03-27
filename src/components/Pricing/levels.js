import React, { Fragment } from "react"
import { Row, Col, Button } from "antd"
import { Link } from "gatsby"
import {
  LevelsCard,
  EditingServicesList,
  PriceContainer
} from './styles';

const PricingLevels = ({ content }) => {
  const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <Fragment>
      <Row className="editingLevelsList">
        {
          content && content.map(level =>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="cardCont" key={level.id}>
              <LevelsCard className="levelCard">
                <div className="cardTitle" style={{ background: level.themeColor }}>
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
                        {getCountry == "Asia/Calcutta" ?
                          level.price.usd && <span className="usdPrice" dangerouslySetInnerHTML={{ __html: level.price.usd }} />
                          :
                          level.price.inr && <span className="inrPrice" dangerouslySetInnerHTML={{ __html: level.price.inr }} />
                        }
                        {/* {
                          level.price.inr && <span className="inrPrice" dangerouslySetInnerHTML={{ __html: level.price.inr }} />
                        } */}
                      </PriceContainer>
                    }
                    <Link to="/pricing/#PrizeEstimation"><Button type="primary" style={{ background: level.themeColor }} className="cardBtn">Get Quote</Button></Link>
                  </div>
                </div>
              </LevelsCard>
            </Col>
          )
        }
      </Row>
    </Fragment>
  )
}

export default PricingLevels

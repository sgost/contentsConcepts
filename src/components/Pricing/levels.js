import React, { Fragment, useState, useEffect } from "react"
import { Row, Col, Button, Modal } from "antd"
import GetQuote from "../GetQuote"
import {
  LevelsSection,
  SectionHeading,
  LevelsCard,
  EditingServicesList,
  PriceContainer
} from './styles';

const PricingLevels = ({ content }) => {

  //modal
  const[showModal, setShowModal] = useState(false);
  const handleCancel = e => {
    setShowModal(false);
  };
  const getQuote = e => {
    setShowModal(true);
  };
  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <Fragment>
      <LevelsSection>
        <SectionHeading>
          <h2>{content.heading}</h2>
          <h3>{content.subHeading}</h3>
        </SectionHeading>
        <Row className="editingLevelsList">
          {
            content.pricing && content.pricing.map(level =>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} className="cardCont" key={level.id}>
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
                      <Button type="primary" style={{background: level.themeColor}} className="cardBtn" onClick={getQuote}>Get Quote</Button>
                    </div>
                  </div>
                </LevelsCard>
              </Col>
            )
          }
        </Row>
      </LevelsSection>
      <Modal
        title="Get Quote"
        visible={showModal}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
      >
        <GetQuote onSubmit={handleCancel} />
      </Modal>
    </Fragment>
  )
}

export default PricingLevels

import React, { Fragment, useState, useEffect } from "react"
import { Row, Col, Button, Modal } from "antd"
import GetQuote from "../GetQuote"
import {
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
      <Row className="editingLevelsList">
        {
          content && content.map(level =>
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
                        {
                          level.price.usd && <span className="usdPrice" dangerouslySetInnerHTML={{__html: level.price.usd}} />
                        }
                        {
                          level.price.inr && <span className="inrPrice" dangerouslySetInnerHTML={{__html: level.price.inr}} />
                        }
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

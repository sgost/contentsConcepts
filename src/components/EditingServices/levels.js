import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, List, Button, Modal } from 'antd';
import CheckMark from '../../images/check_mark.svg'
import GetQuote from "../GetQuote"
import {
  LevelsSection,
  SectionHeading,
  LevelsListing,
  FooterCol
} from './styles';

const EditingLevels = ({ content }) => {

  // const content = props.content;

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
      {
        content &&
        <LevelsSection>
          <SectionHeading>
            <h2>{content.title} <span> - {content.subHeading}</span></h2>
          </SectionHeading>
          <LevelsListing>
            <List
              dataSource={content.levels}
              header={
                <Row>
                  <Col xs={9} sm={9} md={9} lg={10} xl={10}></Col>
                  {
                    content.levelTypes && content.levelTypes.map(level =>
                      <Col xs={5} sm={5} md={4} lg={4} xl={4} key={level.id} className="cardCol" style={{background: level.themeColor}}>
                        <span>{level.title}</span>
                      </Col>
                    )
                  }
                </Row>
              }
              footer={
                <Row>
                  <Col xs={9} sm={9} md={9} lg={10} xl={10}></Col>
                  {
                    content.levelTypes && content.levelTypes.map(level =>
                      <FooterCol xs={5} sm={5} md={4} lg={4} xl={4} key={level.id} theme={level.themeColor} className="cardCol">
                        <Button type="primary" onClick={getQuote}>Get Quote</Button>
                      </FooterCol>
                    )
                  }
                </Row>
              }
              renderItem={item =>
                <List.Item key={item.id} className="listItemsContainer">
                  <Row>
                    <Col xs={9} sm={9} md={9} lg={10} xl={10}>
                      {item.title}
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {
                        item.copy === 'yes' ? <img src={CheckMark} alt="yes" /> : <span className="hyphen">-</span>
                      }
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {
                        item.substantive === 'yes' ? <img src={CheckMark} alt="yes" /> : <span className="hyphen">-</span>
                      }
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {
                        item.developmental === 'yes' ? <img src={CheckMark} alt="yes" /> : <span className="hyphen">-</span>
                      }
                    </Col>
                  </Row>
                </List.Item>
              }
            />
          </LevelsListing>
        </LevelsSection>
      }
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

export default EditingLevels

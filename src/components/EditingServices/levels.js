import React, { Fragment } from 'react'
import { Row, Col, List } from 'antd';
import CheckMark from '../../images/check_mark.svg'
import {
  LevelsSection,
  SectionHeading,
  LevelsListing
} from './styles';

const EditingLevels = ({ content }) => {

  // const content = props.content;

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
    </Fragment>
  )
}

export default EditingLevels

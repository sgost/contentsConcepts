import React, { Fragment } from 'react'
import { Row, Col } from "antd"
import {
  HighlightsSection,
  SectionHeading,
  HighlightCard
} from './styles';

const Highlights = ({ content }) => {

  // const content = props.content;

  return (
    <Fragment>
      {
        content &&
        <HighlightsSection>
          <SectionHeading>
            <h2>{content.title}</h2>
          </SectionHeading>
          <Row className="highlightsList">
            {
              content.highlights && content.highlights.map(dataItem =>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} key={dataItem.id} className="card">
                  <HighlightCard>
                    <div className="imageContainer">
                      <img src={require('../../images/' + dataItem.image)} alt={dataItem.title} />
                    </div>
                    <h3>{dataItem.title}</h3>
                    <p>{dataItem.description}</p>
                  </HighlightCard>
                </Col>
              )
            }
          </Row>
        </HighlightsSection>
      }
    </Fragment>
  )
}

export default Highlights

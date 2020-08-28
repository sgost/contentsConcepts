import React from "react";
import PropTypes from "prop-types";

import { Checkbox, Row, Col } from 'antd';

const QuoteCategoryPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  const container = {
    background: '#FFFFFF',
    border: '1px solid #CCCCCC',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 5px rgba(25,39,67,0.1)',
    borderRadius: '8px',
    padding: '18px 24px',
    margin: '24px 10px'
  };

  return (
    <Checkbox.Group style={container}>
      <Row>
        {
          data.categories && data.categories.map(item =>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5px 0px'}} className="categoryItem" key={item.value}>
              <Checkbox value={item.value}>{item.label}</Checkbox>
            </Col>
          )
        }
      </Row>
    </Checkbox.Group>
  );

};

QuoteCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default QuoteCategoryPreview;

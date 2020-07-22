import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Checkbox, Row, Col, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  QuoteFormSection
} from './styles';

const GetQuote = props => {

  const { TextArea } = Input;

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = values => {
    console.log(values);
    props.onSubmit();
  };

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/quoteCategory.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            categories {
              label
              value
            }
          }
        }
      }
    }
  `);

  const categoryData = data.file.childMarkdownRemark.frontmatter;

  return (
    <QuoteFormSection>
      <Form name="quote-form" onFinish={onFinish} className="quoteForm">
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: `Can't be blank`,
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
          className="inputGroupBlock"
        >
          <Form.Item
            name='phone'
            className="inlineInput"
          >
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item
            name='email'
            className="inlineInput emailInput"
            rules={[
              {
                required: true,
                type: 'email',
                message: `Can't be blank`,
              },
            ]}
          >
            <Input placeholder="Email ID" />
          </Form.Item>
        </Form.Item>
        <div>
          <label className="formLabel" htmlFor="category">Select Category</label>
          <Form.Item
            name='category'
          >
            <Checkbox.Group style={{ width: '100%' }} className="categoryGroup" id="category">
              <Row>
                {
                  categoryData.categories && categoryData.categories.map(item =>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} className="categoryItem" key={item.value}>
                      <Checkbox value={item.value}>{item.label}</Checkbox>
                    </Col>
                  )
                }
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </div>
        <div>
          <label className="formLabel"  htmlFor="categoryFile">Select Category</label>
          <Form.Item
            name='categoryFile'
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="category" listType="picture" id="categoryFile">
              <Button className="uploadBtn">
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </div>
        <Form.Item
          name="requirement"
        >
          <TextArea rows={4} placeholder="Describe your requirement briefly." />
        </Form.Item>
        <Form.Item className="submitBtn">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </QuoteFormSection>
  )
}

export default GetQuote

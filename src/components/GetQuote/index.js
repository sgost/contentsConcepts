import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Checkbox, Row, Col, Upload, Button, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  QuoteFormSection
} from './styles';

const GetQuote = props => {

  const [form] = Form.useForm();

  const { TextArea } = Input;

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const[showUpload, setShowUpload] = useState(true);

  const uploadChange = (data) => {
    if(data.fileList.length > 0) {
      setShowUpload(false);
    }
  };

  const customReqChange = ({ file, onSuccess}) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const removeUploadedFile = () => {
    setShowUpload(true);
  };

  const[disabled, setDisabled] = useState(false);

  const onFinish = async values => {

    setDisabled(true);

    const data = new FormData();

    data.append("name", values.name);
    data.append("email", values.email);

    if(values.phone === undefined) {
      data.append("phone", '-');
    } else {
      data.append("phone", values.phone);
    }

    if(values.category === undefined) {
      data.append("category", '-');
    } else {
      data.append("category", values.category);
    }

    if(values.categoryFile !== undefined) {
      data.append("file", values.categoryFile[0].thumbUrl);
      data.append("filename", values.categoryFile[0].name);
    } else {
      data.append("filename", '-');
    }

    if(values.wordCount === undefined) {
      data.append("wordCount", '-');
    } else {
      data.append("wordCount", values.wordCount);
    }

    if(values.requirement === undefined) {
      data.append("requirement", '-');
    } else {
      data.append("requirement", values.requirement);
    }

    var url= "https://script.google.com/macros/s/AKfycbxPQYfAmU27Vfted5BMWK3Rmn8t6NMWFORuB9Q0X6umaZEpE2Oz/exec";

    await fetch(url, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    }).then(function (response) {
      alert('Thank you. We will get back to you as quick as humanly possible :)');
      setDisabled(false);
      form.resetFields();
    }).catch(function (err) {
      setDisabled(false);
    });
    setShowUpload(true);
    props.onSubmit();
    setShowUpload(true);
  };

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "quoteCategory.md"}) {
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
      <Form name="quote-form" onFinish={onFinish} className="quoteForm gform" form={form}>
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
                message: `Can't be blank`,
              },
              {
                type: 'email',
                message: `Please enter valid Email ID`,
              }
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
          <label className="formLabel" htmlFor="categoryFile">Select your file to upload</label>
          <Form.Item
            name='categoryFile'
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="category" listType="picture" id="categoryFile" onChange={uploadChange} onRemove={removeUploadedFile} customRequest={customReqChange} >
              {
                showUpload &&
                <Button className="uploadBtn">
                  <UploadOutlined /> Click to upload
                </Button>
              }
            </Upload>
          </Form.Item>
        </div>
        <div>
          <label className="formLabel" htmlFor="wordCount">Word Count</label>
          <Form.Item
            name='wordCount'
          >
            <InputNumber min={0} id="wordCount" placeholder="Word Count" />
          </Form.Item>
        </div>
        <Form.Item
          name="requirement"
        >
          <TextArea rows={4} placeholder="Describe your requirement briefly." />
        </Form.Item>
        <Form.Item className="submitBtn">
          <Button type="primary" htmlType="submit" disabled={disabled}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </QuoteFormSection>
  )
}

export default GetQuote

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Radio, Row, Col, Upload, Button, InputNumber, message } from 'antd';
import { UploadOutlined, SmileOutlined } from '@ant-design/icons';
import {
  QuoteFormSection
} from './styles';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const GetQuote = props => {
  const [value, setValue] = useState();

  const [form] = Form.useForm();

  const { TextArea } = Input;

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const [showUpload, setShowUpload] = useState(true);

  const uploadChange = (data) => {
    if (data.fileList.length > 0) {
      setShowUpload(false);
    }
  };

  const customReqChange = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const removeUploadedFile = () => {
    setShowUpload(true);
  };

  function transformFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        file.base64 = e.target.result;
        resolve(e.target.result);
      };
    });
  }

  const [disabled, setDisabled] = useState(false);

  const onFinish = async values => {

    setDisabled(true);

    const data = new FormData();

    data.append("name", values.name);
    data.append("email", values.email);

    if (values.phone === undefined) {
      data.append("phone", '-');
    } else {
      data.append("phone", values.phone);
    }

    if (values.category === undefined) {
      data.append("category", '-');
    } else {
      data.append("category", values.category);
    }

    if (values.categoryFile !== undefined) {
      data.append("file", values.categoryFile[0].base64)
      data.append("filename", values.categoryFile[0].name);
    } else {
      data.append("filename", '-');
    }

    if (values.wordCount === undefined) {
      data.append("wordCount", '-');
    } else {
      data.append("wordCount", values.wordCount);
    }

    if (values.requirement === undefined) {
      data.append("requirement", '-');
    } else {
      data.append("requirement", values.requirement);
    }

    var url = "https://script.google.com/macros/s/AKfycbxPQYfAmU27Vfted5BMWK3Rmn8t6NMWFORuB9Q0X6umaZEpE2Oz/exec";

    await fetch(url, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    }).then(function (response) {
      message.success({
        content: 'Thank you. We will get back to you as quick as humanly possible.',
        className: 'messageCont',
        icon: <SmileOutlined />
      });
      setDisabled(false);
      form.resetFields();
      props.onSubmit();
    }).catch(function (err) {
      message.error({
        content: err.message,
        className: 'messageCont',
        icon: <SmileOutlined rotate={180} />
      });
      setDisabled(false);
    });
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [errors, setErrors] = useState("");
  const validation = () => {
    let errors = {};
    if (!name || name.length < 3) {
      errors.color = "red"
    } if (!email) {
      errors.color = "red"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.color = "red"
    }
    return errors;
  }
  const signnn = () => {
    setErrors(validation())
  }

  return (
    <QuoteFormSection>
      <Form name="quote-form" onFinish={onFinish} className="quoteForm gform" form={form}>
        <div>
          <label className="formLabel" htmlFor="categoryFile">Name{(!name) ? (<span style={{ color: (errors.color) }}>*</span>) : (<span>*</span>)}</label>
          <Form.Item
            name='name'
            rules={[
              {
                required: true,
                message: `Can't be blank`,
              },
            ]}
            value={name}
            onChange={e => setName(e.target.value)}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </div>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
          className="inputGroupBlock"
        >
          <div className="inlineInput">
            <label className="formLabel" htmlFor="category">Phone Number</label>
            <Form.Item
              name='phone'
            >
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue} id="inlineInput" />
            </Form.Item>
          </div>
          <div className="inlineInput emailInput">
            <label className="formLabel" htmlFor="category">Email ID {(!email) ? (<span style={{ color: (errors.color) }}>*</span>) : (<span>*</span>)}</label>
            <Form.Item
              name='email'
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            >
              <Input placeholder="Email ID" />
            </Form.Item>
          </div>
        </Form.Item>
        <div>
          <label className="formLabel" htmlFor="category">Select Category</label>
          <Form.Item
            name='category'
          >
            <Radio.Group style={{ width: '100%' }} className="categoryGroup" id="category">
              <Row>
                {
                  categoryData.categories && categoryData.categories.map(item =>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} className="categoryItem" key={item.value}>
                      <Radio value={item.value}>{item.label}</Radio>
                    </Col>
                  )
                }
              </Row>
            </Radio.Group>
          </Form.Item>
        </div>
        <div>
          <label className="formLabel" htmlFor="categoryFile">Select your file to upload</label>
          <Form.Item
            name='categoryFile'
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="category" listType="picture" id="categoryFile" onChange={uploadChange} onRemove={removeUploadedFile} customRequest={customReqChange} transformFile={transformFile} >
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
        {(!name || name.length < 3 || (!/\S+@\S+\.\S+/.test(email))) ? (
          <Form.Item className="submitBtn">
            <Button type="primary" onClick={signnn}>
              Submit
            </Button>
          </Form.Item>
        ) : (
          <Form.Item className="submitBtn">
            <Button type="primary" htmlType="submit" disabled={disabled}>
              Submit
            </Button>
          </Form.Item>
        )}
      </Form>
    </QuoteFormSection>
  )
}

export default GetQuote

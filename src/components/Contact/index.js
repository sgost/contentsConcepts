import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Button, Select } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons';
import Call from '../../images/call.svg'
import Email from '../../images/email.svg'

import {
  ContactSection,
  SectionHeading,
  FormContainer,
  ContactDetails
} from './styles';

const Contact = props => {

  const[contactContent, setContactContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/contact.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            call
            email
            categories {
              id
              title
              value
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContactContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  const { Option } = Select;

  const onFinish = values => {
    console.log(values);
  };

  return (
    <Fragment>
      {
        data.file &&
        <ContactSection>
          <SectionHeading>
            <h2>{contactContent.title}</h2>
          </SectionHeading>
          <FormContainer>
            <Form name="contact-details" onFinish={onFinish}>
              <Form.Item
                style={{
                  marginBottom: 0,
                }}
                className="inputGroupBlock"
              >
                <Form.Item
                  name='name'
                  className="inlineInput"
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
              <Form.Item name='category'>
                <Select
                  placeholder="Select Category"
                  suffixIcon={<CaretDownOutlined />}
                  getPopupContainer={triggerNode => triggerNode.parentNode}
                >
                  {contactContent.categories && contactContent.categories.map(d => (
                    <Option key={d.value}>{d.title}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='description'>
                <Input.TextArea rows={4} placeholder="How can we help you?" />
              </Form.Item>
              <Form.Item className="submitButton">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
          <ContactDetails>
            <a href={'tel:' + contactContent.call}>
              <img src={Call} alt="phone number" />
              <span>{contactContent.call}</span>
            </a>
            <a href={'mailto:' + contactContent.email}>
              <img src={Email} alt="email" />
              <span>{contactContent.email}</span>
            </a>
          </ContactDetails>
        </ContactSection>
      }
    </Fragment>
  )
}

export default Contact

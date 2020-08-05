import React, { Fragment, useState, useEffect } from "react"
import { Button, Row, Col, Modal } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import GetQuote from "../GetQuote"
import {
  ServicesSection,
  SectionHeading,
  ServiceListContainer
} from './styles';

export const HomeServicesSection = ({
  title,
  services
}) => {
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
      <ServicesSection>
        <SectionHeading>
          <h2>{title}</h2>
        </SectionHeading>
        <ServiceListContainer>
          <Row type="flex" className="servicesList">
            {
              services && services.map(dataItem =>
                <Col xs={24} sm={10} md={8} lg={8} xl={7} className="serviceListItem" key={dataItem.id}>
                  <div className="imageContainer">
                    {
                      dataItem.image.publicURL ? <img src={dataItem.image.publicURL} alt="service" /> : <img src={dataItem.image} alt="service" />
                    }
                  </div>
                  <h3>{dataItem.title}</h3>
                  <p>{dataItem.description}</p>
                  <Button type="primary" onClick={getQuote}>Get Quote</Button>
                </Col>
              )
            }
          </Row>
        </ServiceListContainer>
      </ServicesSection>
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
  );
};

const Services = props => {

  const[servicesContent, setServicesContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/services.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            services {
              id
              title
              description
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setServicesContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <HomeServicesSection
          title={servicesContent.title}
          services={servicesContent.services}
        />
      }
    </Fragment>
  )
}

export default Services

import React, { Fragment, useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import QuoteLeft from "../../images/quote_left.svg"
import {
  CustomersSection,
  SectionHeading,
  CircleImage,
  WrapperDetails,
  ContentBg,
  CustomerDetails,
  CarouselContainer,
  CustomBg
} from './styles';

export const CustomersPreviewSection = ({
  title,
  customers
}) => {

  const slider = useRef(null);

  return (
    <CustomersSection>
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <CarouselContainer>
        <div className="leftArrow" onClick={() => slider.current.prev()} role="presentation">
          <LeftOutlined />
        </div>
        <Carousel ref={slider}>
          {
            customers && customers.map(dataItem =>
              <div key={dataItem.id}>
                <Row className="row">
                  <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                    <CustomBg>
                      <CircleImage>
                        {
                          dataItem.image.childImageSharp ? <img src={dataItem.image.childImageSharp.fluid.src} alt={dataItem.name} /> : <img src={dataItem.image} alt={dataItem.name} />
                        }
                      </CircleImage>
                    </CustomBg>
                  </Col>
                  <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                    <WrapperDetails>
                      <ContentBg>
                        <img src={QuoteLeft} alt="quote background" />
                      </ContentBg>
                      <h3>{dataItem.commentExcerpt}</h3>
                      <CustomerDetails>
                        <p>{dataItem.comment}</p>
                        <h4>{dataItem.name}</h4>
                        <span>{dataItem.role}, {dataItem.company}</span>
                      </CustomerDetails>
                    </WrapperDetails>
                  </Col>
                </Row>
              </div>
            )
          }
        </Carousel>
        <a className="rightArrow" onClick={() => slider.current.next()} role="presentation">
          <RightOutlined />
        </a>
      </CarouselContainer>
    </CustomersSection>
  );
};

const Customers = props => {

  const[customersContent, setCustomersContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/customers.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            customers {
              id
              name
              commentExcerpt
              comment
              role
              company
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setCustomersContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <CustomersPreviewSection
          title={customersContent.title}
          customers={customersContent.customers}
        />
      }
    </Fragment>
  )
}

export default Customers

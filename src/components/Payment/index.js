import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { PayContainer } from "./styles";

export const Pay = ({
    title,
    description,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
    description9,
    description10,
    description11,
    description12,
    description13,
    description14,
    description15,
    qrimage
}) => {
    return (
        <>
            <PayContainer>
                <div id="pays">
                    <h1 id="pop_title">{title}</h1>
                    <p id="pop_description">{description} <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4TBCSQSB7GVPW" target="_blank" without rel="noreferrer" >PayPal</a></p>
                    <div id="pay_containers">
                        <div id="pay_container_block1s">
                            <h1 id="title">{description1}</h1>
                            <img src={qrimage} alt="qr" id="payqrs" />
                        </div>
                        <div id="pay_container_block2s">
                            <h1>{description1}</h1>
                            <p id="notes">{description2}
                            </p>
                            <p>{description3} - <span>{description4}</span> {description5}</p>
                            <p>{description6} - <span>{description7}</span> | {description8} <span>{description9}</span> |  {description10} <span>{description11} </span></p>
                            <p>{description12}: <span>{description13}</span></p>
                            <p>{description14} - <span>{description15}</span></p>
                        </div>
                    </div>
                </div>
            </PayContainer>
        </>
    )
}
const PayPrev = props => {
    const [PaysData, setPaysData] = useState({});
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "payment/payment.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            description1
            description2
            description3
            description4
            description5
            description6
            description7
            description8
            description9
            description10
            description11
            description12
            description13
            description14
            description15
            qrimage{
                publicURL
            }
          }
        }
      }
    }
  `);
    useEffect(() => {
        if (data.file) {
            setPaysData(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    const QR_Image = data.file.childMarkdownRemark.frontmatter.qrimage.publicURL ? data.file.childMarkdownRemark.frontmatter.qrimage.publicURL : data.file.childMarkdownRemark.frontmatter.qrimage
    return (
        <>
            {
                data.file &&
                <Pay
                    title={PaysData.title}
                    description={PaysData.description}
                    description1={PaysData.description1}
                    description2={PaysData.description2}
                    description3={PaysData.description3}
                    description4={PaysData.description4}
                    description5={PaysData.description5}
                    description6={PaysData.description6}
                    description7={PaysData.description7}
                    description8={PaysData.description8}
                    description9={PaysData.description9}
                    description10={PaysData.description10}
                    description11={PaysData.description11}
                    description12={PaysData.description12}
                    description13={PaysData.description13}
                    description14={PaysData.description14}
                    description15={PaysData.description15}
                    description16={PaysData.description16}
                    qrimage={QR_Image}
                />
            }
        </>
    )
}
export default PayPrev;
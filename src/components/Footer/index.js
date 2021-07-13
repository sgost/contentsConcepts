import { graphql, useStaticQuery, Link } from "gatsby"
import React, { Fragment } from "react"
import {
  FooterSection,
  SitemapContainer,
  SitemapList
} from './styles';
import f1 from "../../images/fimg1.svg";
import f2 from "../../images/fimg2.svg";
import f3 from "../../images/fimg3.svg";
import f4 from "../../images/fimg4.svg";
import f5 from "../../images/fimg5.svg";
import f6 from "../../images/fimg6.svg";
import "./Tnc.css";
import tnc from "./tnc.pdf";
import pri from "./pp.pdf";

export const FooterPreviewSection = ({
  title,
  sitemapList
}) => {
  return (
    <FooterSection>
      <SitemapContainer>
        {
          sitemapList && sitemapList.map(dataItem =>
            <SitemapList key={dataItem.id}>
              {
                dataItem.link ?
                  <h5><Link to={dataItem.link} key={dataItem.id}>{dataItem.title}</Link></h5>
                  : <h5>{dataItem.title}</h5>
              }
              {
                dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                  <Link to={sitemap.link} key={sitemap.id} className="linkItem">{sitemap.title}</Link>
                )
              }
            </SitemapList>
          )
        }
      </SitemapContainer>
      <div id="footer_minidiv">
        <div id="footer_minidiv_block1">
          <img src={f1} alt="img" />
          <img src={f2} alt="img" />
          <img src={f3} alt="img" />
          <img src={f4} alt="img" />
          <img src={f5} alt="img" />
          <img src={f6} alt="img" />
        </div>
        <div id="footer_minidiv_block2">
          <a href={tnc}>Terms of Service</a>
          <a href={pri}>Privacy Policy</a>
        </div>
      </div>
    </FooterSection>
  );
};

const Footer = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
              id
              title
              link
              sitemap {
                id
                link
                title
              }
            }
          }
        }
      }
    }
  `);

  const content = data.file.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      {
        content && <FooterPreviewSection title={content.title} sitemapList={content.sitemapList} />
      }
    </Fragment>
  )
}

export default Footer

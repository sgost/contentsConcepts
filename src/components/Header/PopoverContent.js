import { Link } from "gatsby"
import React, { Fragment } from "react"
import {
  SitemapContainer,
  SitemapList
} from './styles';

const PopoverContent = props => {

  const content = props.content.sitemapList.filter(sitemap => {
    return sitemap.id !== 1;
  });

  return (
    <Fragment>
      <SitemapContainer>
        {
          content && content.map(dataItem =>
            <SitemapList key={dataItem.id}>
              {
                dataItem.link ?
                  <h5><Link to={dataItem.link} key={dataItem.id} onClick={props.onClick}>{dataItem.title}</Link></h5>
                : <h5>{dataItem.title}</h5>
              }
              {
                dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                  <Link to={sitemap.link} key={sitemap.id} onClick={props.onClick} className="linkItem">{sitemap.title}</Link>
                )
              }
            </SitemapList>
          )
        }
      </SitemapContainer>
    </Fragment>
  )
}

export default PopoverContent

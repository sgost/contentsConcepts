import { Link } from "gatsby"
import React, { Fragment } from "react"
import {
  SitemapContainer,
  SitemapList
} from './styles';

const PopoverContent = props => {

  const content = props.content.sitemapList.filter(sitemap => {
    return sitemap.title !== 'About Us';
  });

  return (
    <Fragment>
      <SitemapContainer>
        {
          content && content.map(dataItem =>
            <SitemapList key={dataItem.id}>
              <h5>{dataItem.title}</h5>
              {
                dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                  <Link to={sitemap.link} key={sitemap.id} onClick={props.onClick}>{sitemap.title}</Link>
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

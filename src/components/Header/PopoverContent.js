import { Link } from "gatsby"
import React, { Fragment, useState, useEffect } from "react"
import {
  SitemapContainer,
  SitemapList
} from './styles';

const PopoverContent = props => {


  const [dataArr, setDataArr] = useState([]);

  // const content = props.content.sitemapList.filter(sitemap => {
  //   return sitemap.id !== 1;
  // });

  const newArrFun = () => {
    const testArr = props.serviceData?.map((item, index) => ({
      link: item?.node?.fields?.slug,
      title: item?.node?.frontmatter?.title,
      category: getNameFun(item?.node?.fields?.slug),
      id: index
    }))?.filter((item) => item?.category !== undefined);
    setDataArr(testArr);
  }

  const getNameFun = (slug) => {
    if (slug.includes("academic_editing")) {
      return "Academic Editing"
    } else if (slug.includes("plagiarism_check")) {
      return "Plagarism Check"
    } else if (slug.includes("business_editing")) {
      return "Business Editing"
    } else if (slug.includes("publication_support")) {
      return "Publication Support"
    }
  }


  useEffect(() => {
    newArrFun();
  }, [])

  return (
    <Fragment>
      <SitemapContainer>
        {/* {
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
        } */}

        <SitemapList>
          <h5>Academic Editing</h5>
          {dataArr?.filter((itm) => itm?.category === "Academic Editing").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Plagarism Check</h5>
          {dataArr?.filter((itm) => itm?.category === "Plagarism Check").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Business Editing</h5>
          {dataArr?.filter((itm) => itm?.category === "Business Editing").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Publication Support</h5>
          {dataArr?.filter((itm) => itm?.category === "Publication Support").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
      </SitemapContainer>
    </Fragment>
  )
}

export default PopoverContent

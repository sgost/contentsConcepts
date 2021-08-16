import React, { Fragment } from 'react'
import { Link } from "gatsby"
import { Button } from 'antd'
import Marker from '../../images/tick_filled.svg';
import {
  HeadingContainer,
  TypesContainer,
  FeaturesListContainer,
  FeatureSecList,
  RefundSection,
  ButtonContainer
} from './styles';

const MenuContent = ({ content, description, preview }) => {

  // const content = props.content;

  return (
    <Fragment>
      { content &&
        <div>
          <HeadingContainer>
            <h2>{content.title}</h2>
            {
              content.highlight && <span>({content.highlight})</span>
            }
          </HeadingContainer>
          <TypesContainer>
            {
              preview ? <div>{description}</div> : <div dangerouslySetInnerHTML={{ __html: description }} />
            }
          </TypesContainer>
          <FeaturesListContainer>
            {
              content.features && content.features.map(dataItem =>
                <FeatureSecList key={dataItem.id}>
                  <img src={Marker} alt="features" />
                  <p>
                    {
                      dataItem.link ? <Link to={dataItem.link}>{dataItem.title}</Link> : dataItem.title
                    }
                  </p>
                </FeatureSecList>
              )
            }
          </FeaturesListContainer>
          <RefundSection>
            <div dangerouslySetInnerHTML={{__html: content.message}} />
          </RefundSection>
          <ButtonContainer>
            <Link to="/pricing/"><Button type="primary">Get Quote</Button></Link>
            <Button onClick={() => window.location.href="#editingSample"}>Check Sample</Button>
            <Button onClick={() => window.location.href="#editingProcess"}>Editing Process</Button>
          </ButtonContainer>
        </div>
      }
    </Fragment>
  )
}

export default MenuContent

import React from 'react'
import { Button } from 'antd'
import Marker from '../../images/marker.svg';
import {
  HeadingContainer,
  TypesContainer,
  FeaturesListContainer,
  FeatureSecList,
  RefundSection,
  ButtonContainer
} from './styles';

const MenuContent = ({ content }) => {

  // const content = props.content;

  return (
    <div>
      <HeadingContainer>
        <h2>{content.title}</h2>
        <span>({content.highlight})</span>
      </HeadingContainer>
      <TypesContainer>
        {
          content.editedTypes &&
          <div>
            {content.editedTypes.title} -
            {
              content.editedTypes.types && content.editedTypes.types.map((type, i, arr) => {
                let divider = i<arr.length-1 && <>, </>;
                return (
                  <span key={type}>{type}{divider}</span>
                )
              })
            }
          </div>
        }
      </TypesContainer>
      <FeaturesListContainer>
        {
          content.features && content.features.map(dataItem =>
            <FeatureSecList key={dataItem.id}>
              <img src={Marker} alt="features" />
              <p>{dataItem.title}</p>
            </FeatureSecList>
          )
        }
      </FeaturesListContainer>
      <RefundSection>
        <p>Not happy with edit?</p>
        <p className="refundText">100% refund without any condition</p>
      </RefundSection>
      <ButtonContainer>
        <Button type="primary">Get Quote</Button>
        <Button>Check Sample</Button>
        <Button>Editing Process</Button>
      </ButtonContainer>
    </div>
  )
}

export default MenuContent

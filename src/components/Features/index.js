import React from "react"

import {
  FeaturesSection,
  FeaturesList,
  FeatureListItem
} from './styles';

const Features = props => {
  return (
    <FeaturesSection>
      <FeaturesList>
        {
          props.data && props.data.map(dataItem =>
            <FeatureListItem key={dataItem.id}>
              <div className="imageContainer">
                <img src={require('../../images/' + dataItem.image)} alt="features" />
              </div>
              <span className="labelText">{dataItem.title}</span>
            </FeatureListItem>
          )
        }
      </FeaturesList>
    </FeaturesSection>
  )
}

export default Features

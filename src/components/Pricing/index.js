import React, { Fragment } from "react"
import PricingLevels from './levels';
import PricingQuality from './quality';

const Pricing = ({ content }) => {
  return (
    <Fragment>
      <PricingLevels content={content} />
      <PricingQuality content={content.quality} />
    </Fragment>
  )
}

export default Pricing

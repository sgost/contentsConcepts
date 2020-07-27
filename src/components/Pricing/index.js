import React, { Fragment } from "react"
import PricingLevels from './levels';

const Pricing = ({ content }) => {
  return (
    <Fragment>
      <PricingLevels content={content} />
    </Fragment>
  )
}

export default Pricing

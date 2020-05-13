import React from "react"

import {
  TestimonialSection,
  TestimonialList,
  TestimonialListItem,
  CountWrapper,
  StatusCircle
} from './styles';

const Testimonial = props => {
  return (
    <TestimonialSection>
      <TestimonialList>
        {
          props.content && props.content.map(dataItem =>
            <TestimonialListItem key={dataItem.id}>
              <CountWrapper>
                <StatusCircle theme={dataItem.themeColor}></StatusCircle>
                <h2>{dataItem.count.toLocaleString('en-IN')}<span className="customDot">&bull;</span></h2>
              </CountWrapper>
              <span className="titleText">{dataItem.title}</span>
            </TestimonialListItem>
          )
        }
      </TestimonialList>
    </TestimonialSection>
  )
}

export default Testimonial

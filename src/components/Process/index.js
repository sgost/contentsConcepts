import React from "react"

import {
  ProcessSection,
  SectionHeading,
  ProcessList,
  ProcessListItem,
  ListOrder,
  ListContent
} from './styles';

const Process = props => {

  const processContent = props.content;

  return (
    <ProcessSection>
      <SectionHeading>
        <h2>{processContent.title}</h2>
      </SectionHeading>
      <ProcessList>
        {
          processContent.process && processContent.process.map(dataItem =>
            <ProcessListItem key={dataItem.id}>
              <ListOrder theme={dataItem.themeColor}>
                <span>{dataItem.order}</span>
              </ListOrder>
              <ListContent>
                <h3>{dataItem.title}</h3>
                <p>{dataItem.description}</p>
              </ListContent>
            </ProcessListItem>
          )
        }
      </ProcessList>
    </ProcessSection>
  )
}

export default Process

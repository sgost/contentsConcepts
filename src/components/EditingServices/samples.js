import React from 'react'
import { Tabs } from 'antd';
import {
  SamplesSection,
  SectionHeading,
  TabsContainer,
  TabContent
} from './styles';

const { TabPane } = Tabs;

const EditingSamples = props => {

  const content = props.content;

  return (
    <SamplesSection>
      <SectionHeading>
        <h2>{content.title}</h2>
      </SectionHeading>
      <TabsContainer>
        <Tabs defaultActiveKey="1">
          {
            content.samples && content.samples.map(sample =>
              <TabPane tab={sample.title} key={sample.id}>
                <TabContent>
                  <p>{sample.description}</p>
                  <div className="sampleImage">
                    <img src={require('../../images/' + sample.image)} alt={sample.title} />
                  </div>
                </TabContent>
              </TabPane>
            )
          }
        </Tabs>
      </TabsContainer>
    </SamplesSection>
  )
}

export default EditingSamples

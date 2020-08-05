import React, { Fragment } from 'react'
import { Tabs } from 'antd';
import {
  SamplesSection,
  SectionHeading,
  TabsContainer,
  TabContent
} from './styles';

const { TabPane } = Tabs;

const EditingSamples = ({ content }) => {
  // const content = props.content;
  console.log(content);
  return (
    <Fragment>
      {
        content &&
        <SamplesSection id="editingSample">
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
                        {
                          sample.image.childImageSharp ? <img src={sample.image.childImageSharp.fluid.src} alt={sample.title} /> : <img src={sample.image} alt={sample.title} />
                        }
                      </div>
                    </TabContent>
                  </TabPane>
                )
              }
            </Tabs>
          </TabsContainer>
        </SamplesSection>
      }
    </Fragment>
  )
}

export default EditingSamples

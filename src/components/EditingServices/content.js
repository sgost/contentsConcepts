import React, { Fragment, useState, useEffect} from 'react'
import { Link } from "gatsby"
import { Button, Modal } from 'antd'
import Marker from '../../images/tick_filled.svg';
import GetQuote from "../GetQuote"
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

  //modal
  const[showModal, setShowModal] = useState(false);

  const handleCancel = e => {
    setShowModal(false);
  };

  const getQuote = e => {
    setShowModal(true);
  };

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

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
          <TypesContainer dangerouslySetInnerHTML={{__html: content.description}} />
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
            <p dangerouslySetInnerHTML={{__html: content.message}} />
          </RefundSection>
          <ButtonContainer>
            <Button type="primary" onClick={getQuote}>Get Quote</Button>
            <Button onClick={() => window.location.href="#editingSample"}>Check Sample</Button>
            <Button onClick={() => window.location.href="#editingProcess"}>Editing Process</Button>
          </ButtonContainer>
        </div>
      }
      <Modal
        title="Get Quote"
        visible={showModal}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
      >
        <GetQuote onSubmit={handleCancel} />
      </Modal>
    </Fragment>
  )
}

export default MenuContent

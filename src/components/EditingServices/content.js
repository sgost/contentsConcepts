import React, { Fragment, useState, useEffect} from 'react'
import { Button, Modal } from 'antd'
import Marker from '../../images/marker.svg';
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
          <Button type="primary" onClick={getQuote}>Get Quote</Button>
          <Button onClick={() => window.location.href="#editingSample"}>Check Sample</Button>
          <Button onClick={() => window.location.href="#editingProcess"}>Editing Process</Button>
        </ButtonContainer>
      </div>
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

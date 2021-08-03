import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, Fragment } from "react"
import { Button, Modal, Popover } from "antd"
import GetQuote from "../GetQuote"
import {
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';
import PopoverContent from './PopoverContent';

const NavigationMenu = props => {

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const isPartiallyActive = () => {
    if (url) {
      return url.indexOf('/services/') >= 0 ? { className: "activeLink" } : null;
    }
  }

  //modal
  const [showModal, setShowModal] = useState(false);

  const handleCancel = e => {
    setShowModal(false);
  };

  const getQuote = e => {
    setShowModal(true);
    if (props.onClick) {
      props.onClick();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  //popover

  const [popoverVisible, setPopoverVisible] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
              id
              title
              link
              sitemap {
                id
                link
                title
              }
            }
          }
        }
      }
    }
  `);

  const popoverLink = () => {
    setPopoverVisible(false);
  };

  const onVisibleChange = visible => {
    setPopoverVisible(visible);
  };

  return (
    <Fragment>
      <NavBarContainer >
        <NavLinkContainer>
          <NavLink key="about">
            <Link to="/about/" activeClassName="activeLink" onClick={props.onClick}>About</Link>
          </NavLink>
          <NavLink key="services">
            <Popover
              overlayClassName="navPopover"
              content={<PopoverContent content={data.file.childMarkdownRemark.frontmatter} onClick={popoverLink} />}
              visible={popoverVisible}
              onVisibleChange={onVisibleChange}
              placement="bottom"
            >
              <Link
                to="/services/academic_editing"
                getProps={isPartiallyActive}
                activeClassName="activeLink"
                onClick={props.onClick}
                onMouseOver={() => setPopoverVisible(true)}
                onFocus={() => setPopoverVisible(true)}
                id="mob-service-popover"
              >
                Services
              </Link>
            </Popover>
            <Link
              to="/services/academic_editing"
              getProps={isPartiallyActive}
              activeClassName="activeLink"
              onClick={props.onClick}
              id="mob-services-link"
            >
              Services
            </Link>
          </NavLink>
          <NavLink key="blog">
            <Link to="/blog" partiallyActive={true} activeClassName="activeLink" onClick={props.onClick}>Blog</Link>
          </NavLink>
          <NavLink key="pricing">
            <Link to="/pricing/" activeClassName="activeLink" onClick={props.onClick}>Pricing</Link>
          </NavLink>
          <NavLink key="contact">
            <Link to="/contact/" activeClassName="activeLink" onClick={props.onClick} role="presentation">Contact</Link>
          </NavLink>
        </NavLinkContainer>
        <Button type="primary" onClick={getQuote}>Get Quote</Button>
      </NavBarContainer>
      <Modal
        title="Get Quote"
        visible={showModal}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
        destroyOnClose={true}
      >
        <GetQuote onSubmit={handleCancel} />
      </Modal>
    </Fragment>
  )
}

export default NavigationMenu
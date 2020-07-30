import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { Layout, Menu, Button } from "antd"
import MenuContent from './content';
import EditingLevels from './levels';
import EditingSamples from './samples';
import Highlights from './highlights';
import QualityAssurance from '../QualityAssurance';
import {
  MenuContainer,
  ServiceCard,
  PriceSection,
  TagContent,
  DescSection,
  ButtonSection
} from './styles';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  const rootSubmenuKeys = ['content_development', 'academic', 'business', 'technical', 'consulting'];

  const [openKeysValue, setOpenKeysValue] = useState([data.frontmatter.parentType]);

  const onOpenChange = openKeys  => {
    const latestOpenKey = openKeys.find(key => openKeysValue.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeysValue(openKeys);
    } else {
      setOpenKeysValue(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  const[current, setCurrent] = useState(data.frontmatter.key);

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Fragment>
      <MenuContainer>
        <Layout>
          <Content>
            <MenuContent content={data.frontmatter} />
          </Content>
          <Sider>
            {
              data.frontmatter.priceCard &&
              <ServiceCard>
                <h3>{data.frontmatter.title}</h3>
                <PriceSection>
                  <span className="startingText">{data.frontmatter.priceCard.pricing.title}</span>
                  <span className="priceValue" dangerouslySetInnerHTML={{__html: data.frontmatter.priceCard.pricing.price}} />
                </PriceSection>
                {
                  data.frontmatter.priceCard.tagContent &&
                  <TagContent>
                    <p>
                      {data.frontmatter.priceCard.tagContent}
                    </p>
                  </TagContent>
                }
                <DescSection>
                  <p>{data.frontmatter.priceCard.content}</p>
                </DescSection>
                <ButtonSection>
                  <Button type="primary">
                    <Link to="/pricing/">Get Started</Link>
                  </Button>
                </ButtonSection>
              </ServiceCard>
            }
          </Sider>
          {/* <Sider>
            <Menu
              mode="inline"
              defaultOpenKeys={[data.frontmatter.parentType]}
              style={{ height: '100%' }}
              openKeys={openKeysValue}
              onOpenChange={onOpenChange}
              onClick={handleClick}
              selectedKeys={[current]}
              className="editingMenu"
            >
              <SubMenu key="content_development" title="Content Development" className="editingSubMenu">
                <Menu.Item key="website_content">
                  <Link to="/services/website_content">Website Content</Link>
                </Menu.Item>
                <Menu.Item key="marketing_collateral">
                  <Link to="/services/marketing_collateral">Marketing Collateral</Link>
                </Menu.Item>
                <Menu.Item key="resume_writing">
                  <Link to="/services/resume_writing">Resume Writing</Link>
                </Menu.Item>
                <Menu.Item key="ui_microcopy">
                  <Link to="/services/ui_microcopy">UI Content / Microcopy</Link>
                </Menu.Item>
                <Menu.Item key="blog_content">
                  <Link to="/services/blog_content">Blog Content</Link>
                </Menu.Item>
                <Menu.Item key="social_media_content">
                  <Link to="/services/social_media_content">Social Media Content</Link>
                </Menu.Item>
                <Menu.Item key="adwords">
                  <Link to="/services/adwords">Adwords</Link>
                </Menu.Item>
                <Menu.Item key="facebook_ads">
                  <Link to="/services/facebook_ads">Facebook Ads</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="academic" title="Academic editing and proofreading services" className="editingSubMenu">
                <Menu.Item key="manuscript_editing">
                  <Link to="/services/manuscript_editing">Manuscript Editing</Link>
                </Menu.Item>
                <Menu.Item key="thesis_editing">
                  <Link to="/services/thesis_editing">Thesis Editing</Link>
                </Menu.Item>
                <Menu.Item key="proposal_editing">
                  <Link to="/services/proposal_editing">Proposal Editing</Link>
                </Menu.Item>
                <Menu.Item key="academic_technical_reports">
                  <Link to="/services/academic_technical_reports">Technical Reports</Link>
                </Menu.Item>
                <Menu.Item key="essay_editing">
                  <Link to="/services/essay_editing">Essay Editing</Link>
                </Menu.Item>
                <Menu.Item key="letter_editing">
                  <Link to="/services/letter_editing">Letter Editing</Link>
                </Menu.Item>
                <Menu.Item key="esl_editing">
                  <Link to="/services/esl_editing">ESL Editing</Link>
                </Menu.Item>
                <Menu.Item key="book_editing">
                  <Link to="/services/book_editing">Book Editing</Link>
                </Menu.Item>
                <Menu.Item key="resume_editing">
                  <Link to="/services/resume_editing">Resume Editing</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="business" title="Business editing and proofreading services" className="editingSubMenu">
                <Menu.Item key="propsals">
                  <Link to="/services/propsals">Propsals</Link>
                </Menu.Item>
                <Menu.Item key="business_plans">
                  <Link to="/services/business_plans">Business Plans</Link>
                </Menu.Item>
                <Menu.Item key="business_marketing_collateral">
                  <Link to="/services/business_marketing_collateral">Marketing Collateral</Link>
                </Menu.Item>
                <Menu.Item key="newsletters">
                  <Link to="/services/newsletters">Newsletters</Link>
                </Menu.Item>
                <Menu.Item key="adcopies">
                  <Link to="/services/adcopies">Ad copies</Link>
                </Menu.Item>
                <Menu.Item key="business_website_content">
                  <Link to="/services/business_website_content">Website Content</Link>
                </Menu.Item>
                <Menu.Item key="white_papers">
                  <Link to="/services/white_papers">White Papers</Link>
                </Menu.Item>
                <Menu.Item key="presentations">
                  <Link to="/services/presentations">Presentations</Link>
                </Menu.Item>
                <Menu.Item key="biographies">
                  <Link to="/services/biographies">Biographies</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="technical" title="Technical Editing" className="editingSubMenu">
                <Menu.Item key="user_manuals">
                  <Link to="/services/user_manuals">User Manuals</Link>
                </Menu.Item>
                <Menu.Item key="instructional_guides">
                  <Link to="/services/instructional_guides">Instructional Guides</Link>
                </Menu.Item>
                <Menu.Item key="technical_website_contents">
                  <Link to="/services/technical_website_contents">Website Contents</Link>
                </Menu.Item>
                <Menu.Item key="technical_reports">
                  <Link to="/services/technical_reports">Technical Reports</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="consulting" title="Consulting" className="editingSubMenu">
                <Menu.Item key="content_strategy">
                  <Link to="/services/content_strategy">Content Strategy</Link>
                </Menu.Item>
                <Menu.Item key="digital_marketing">
                  <Link to="/services/digital_marketing">Digital Marketing</Link>
                </Menu.Item>
                <Menu.Item key="social_media">
                  <Link to="/services/social_media">Social Media</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider> */}
        </Layout>
      </MenuContainer>
      <EditingLevels content={data.frontmatter.editingLevels} />
      <EditingSamples content={data.frontmatter.editingSample} />
      <Highlights content={data.frontmatter.editingHighlights} />
      <QualityAssurance />
    </Fragment>
  )
}

export default MenuSection

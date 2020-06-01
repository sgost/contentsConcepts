import React, { useState } from "react"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"
import MenuContent from './Content';
import {
  MenuContainer
} from './styles';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  const rootSubmenuKeys = ['academic', 'business', 'technical'];

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
    <MenuContainer>
      <Layout>
        <Content>
          <MenuContent content={data.frontmatter} />
        </Content>
        <Sider>
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
            <SubMenu key="academic" title="Academic editing and proofreading services" className="editingSubMenu">
              <Menu.Item key="manuscript_editing">
                <Link to="/manuscript_editing">Manuscript Editing</Link>
              </Menu.Item>
              <Menu.Item key="thesis_editing">
                <Link to="/thesis_editing">Thesis Editing</Link>
              </Menu.Item>
              <Menu.Item key="proposal_editing">
                <Link to="/proposal_editing">Proposal Editing</Link>
              </Menu.Item>
              <Menu.Item key="essay">Essay Editing</Menu.Item>
              <Menu.Item key="letter">Letter Editing</Menu.Item>
              <Menu.Item key="esl">ESL Editing</Menu.Item>
              <Menu.Item key="book">Book Editing</Menu.Item>
              <Menu.Item key="resume">Resume Editing</Menu.Item>
            </SubMenu>
            <SubMenu key="business" title="Business editing and proofreading services" className="editingSubMenu">
              <Menu.Item key="propsals">Propsals</Menu.Item>
              <Menu.Item key="businessplan">Business Plans</Menu.Item>
              <Menu.Item key="marketing">Marketing Collateral</Menu.Item>
              <Menu.Item key="newsletters">Newsletters</Menu.Item>
              <Menu.Item key="ad_copies">
                <Link to="/ad_copies">Ad copies</Link>
              </Menu.Item>
              <Menu.Item key="website">Website Content</Menu.Item>
              <Menu.Item key="whitepapers">White Papers</Menu.Item>
              <Menu.Item key="presentation">Presentations</Menu.Item>
              <Menu.Item key="biographie">Biographies</Menu.Item>
            </SubMenu>
            <SubMenu key="technical" title="Technical Editing" className="editingSubMenu">
              <Menu.Item key="usermanual">User Manuals</Menu.Item>
              <Menu.Item key="instructguide">Instructional Guides</Menu.Item>
              <Menu.Item key="webcontent">Website Contents</Menu.Item>
              <Menu.Item key="techreport">Technical Reports</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </MenuContainer>
  )
}

export default MenuSection

import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"
import MenuContent from './content';
import EditingLevels from './levels';
import EditingSamples from './samples';
import Highlights from './highlights';
import Quality from './quality';
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
    <Fragment>
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
                  <Link to="/manuscript_editing">Thesis Editing</Link>
                </Menu.Item>
                <Menu.Item key="proposal_editing">
                  <Link to="/manuscript_editing">Proposal Editing</Link>
                </Menu.Item>
                <Menu.Item key="essay">
                  <Link to="/manuscript_editing">Essay Editing</Link>
                </Menu.Item>
                <Menu.Item key="letter">
                  <Link to="/manuscript_editing">Letter Editing</Link>
                </Menu.Item>
                <Menu.Item key="esl">
                  <Link to="/manuscript_editing">ESL Editing</Link>
                </Menu.Item>
                <Menu.Item key="book">
                  <Link to="/manuscript_editing">Book Editing</Link>
                </Menu.Item>
                <Menu.Item key="resume">
                  <Link to="/manuscript_editing">Resume Editing</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="business" title="Business editing and proofreading services" className="editingSubMenu">
                <Menu.Item key="propsals">
                  <Link to="/manuscript_editing">Propsals</Link>
                </Menu.Item>
                <Menu.Item key="businessplan">
                  <Link to="/manuscript_editing">Business Plans</Link>
                </Menu.Item>
                <Menu.Item key="marketing">
                  <Link to="/manuscript_editing">Marketing Collateral</Link>
                </Menu.Item>
                <Menu.Item key="newsletters">
                  <Link to="/manuscript_editing">Newsletters</Link>
                </Menu.Item>
                <Menu.Item key="adcopies">
                  <Link to="/manuscript_editing">Ad copies</Link>
                </Menu.Item>
                <Menu.Item key="website">
                  <Link to="/manuscript_editing">Website Content</Link>
                </Menu.Item>
                <Menu.Item key="whitepapers">
                  <Link to="/manuscript_editing">White Papers</Link>
                </Menu.Item>
                <Menu.Item key="presentation">
                  <Link to="/manuscript_editing">Presentations</Link>
                </Menu.Item>
                <Menu.Item key="biographie">
                  <Link to="/manuscript_editing">Biographies</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="technical" title="Technical Editing" className="editingSubMenu">
                <Menu.Item key="usermanual">
                  <Link to="/manuscript_editing">User Manuals</Link>
                </Menu.Item>
                <Menu.Item key="instructguide">
                  <Link to="/manuscript_editing">Instructional Guides</Link>
                </Menu.Item>
                <Menu.Item key="webcontent">
                  <Link to="/manuscript_editing">Website Contents</Link>
                </Menu.Item>
                <Menu.Item key="techreport">
                  <Link to="/manuscript_editing">Technical Reports</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </MenuContainer>
      <EditingLevels content={data.frontmatter.editingLevels} />
      <EditingSamples content={data.frontmatter.editingSample} />
      <Highlights content={data.frontmatter.editingHighlights} />
      <Quality content={data.frontmatter.quality} />
    </Fragment>
  )
}

export default MenuSection

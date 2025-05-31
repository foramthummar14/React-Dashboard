
import React from 'react';
import '../style/sidebar.css';
import logg from '../Assest/logo-dark-full.png'
import d from '../Assest/d.png';

import {
  HomeOutlined,
  ShoppingOutlined,
  MailOutlined,
  CalendarOutlined,
  SmileOutlined,
  UserOutlined,
  WechatOutlined,
  FormOutlined,
  // FmdGoodOutlinedIcon,
  PieChartOutlined,
} from '@ant-design/icons';

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';
import { Layout, Menu, theme } from 'antd';
import { Breadcrumb } from 'antd';

import Header1 from './header';
import Box1 from './box';
import Box2 from './box2';
import Box3 from './box3';
import Box4 from './box4';
import Page2 from './page2';
import Page3 from './page3';
import Lpage1 from './lpage';
import Lpage2 from './lpage2';

const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};
const iconLabels = [
  'Dashboards',
  'Ecommerce',
  'Chat',
  'Email',
  'Calendar',
  'Social',
  'Contect',
  'map',
  'Invoice',
  'Pages',
  'Authentication',
  'Widgate',
  'Base Ui',
  'Advance Ui',
  'Chart',
  'Forms',
  'Tables',
  'Icons',
  'Badge Menu',
  'Menu item',
  'Disabled Iteam',
];
const items = [
  HomeOutlined,
  WechatOutlined,
  ShoppingOutlined,
  MailOutlined,
  CalendarOutlined,
  SmileOutlined,
  UserOutlined,
  FmdGoodOutlinedIcon,
  ReceiptOutlinedIcon,
  FileCopyOutlinedIcon,
  LockOutlinedIcon,
  CardGiftcardOutlinedIcon,
  HttpsOutlinedIcon,
  DashboardOutlinedIcon,
  PieChartOutlined,
  FormOutlined,
  TableRestaurantOutlinedIcon,
  LayersOutlinedIcon,
  ModeOutlinedIcon,
  NoteAddOutlinedIcon,
  DoDisturbOutlinedIcon,
].map((IconComponent, index) => ({
  key: String(index + 1),
  icon: <IconComponent style={{ fontSize: '20px' }} />,
  // icon: React.createElement(icon),
  label: iconLabels[index],
}));
const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider width={280} style={siderStyle}>
        <div className="demo-logo-vertical" >
          <div>
            <img src={logg} alt=""  style={{width:'80px'}}/>

          </div>
          <div>
            <img src={d} alt="" srcset=""  style={{width:'70px'}}/>

          </div>
        </div>


        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} className='cutom' />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Header1 />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className='fomi'>
            <div>
              <h4>Finance</h4>
            </div>
            <div>

              <Breadcrumb
                items={[
                  {
                    title: 'Dashboards',
                  },
                  {
                    title: <a href=" ">Finance</a>,
                  }
                ]}
              />
            </div>
          </div>
          <div className='asdf'>
            <div
              style={{
                width: '290px',
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Box1 />
            </div>
            <div
              style={{
                width: '290px',
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Box2 />
            </div>
            <div
              style={{
                width: '290px',

                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Box3 />
            </div>
            <div
              style={{
                width: '290px',
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Box4 />
            </div>
          </div>
          <div className='asdf'>
            <div
              style={{
                width: '592px',

                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Page3 />
            </div>
            <div
              style={{
                width: '592px',
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >

              <Page2 />
            </div>
          </div>
          <div className='asdf'>
            <div
              style={{
                width: '900px',

                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Lpage1 />
            </div>
            <div
              style={{
                width: '470px',
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: '10px'
              }}
            >
              <Lpage2 />

            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          2025 ©{new Date().getFullYear()} Reback. Crafted with  by
          Techzaa
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
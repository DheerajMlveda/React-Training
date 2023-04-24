import { Component } from 'react';
import { Layout, Menu,} from 'antd';
import { Link ,Route , Routes} from 'react-router-dom';
import {
  HomeOutlined,
  MailOutlined,
  InfoCircleOutlined,
  TagOutlined
} from '@ant-design/icons';

import Home from './Components/Home';
import ProductList from './ProductList';
import About from './Components/About';
import Contact from './Components/Contact';
import AddUser from './Components/AddUsers';
import Profile from './Components/Profile';
import LogIn from './Components/LogIn';
import Register from './Components/Register';



const { Content, Sider } = Layout;

export default class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to='/'>
                
              <HomeOutlined/>
              <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='products'>
            <TagOutlined/>
              <span> Users</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="about">
            <InfoCircleOutlined/>
              <span> About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="contact" >

            <MailOutlined/>
              <span> Contact</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
          >
          <Routes>
            <Route  path='/'  element={<Home/>} />
            <Route path ='products' element={<ProductList/>} />
            <Route path ='about' element={<About/>} />
            <Route path ='contact' element={<Contact/>} />
            <Route path ='addUser' element={<AddUser/>} />
            <Route path ='profile' element={<Profile/>} />
            <Route path ='login' element={<LogIn/>} />
            <Route path ='register' element={<Register/>} />
          </Routes>
        </Content>
          </Layout>
        </Layout>
    );
  }
}


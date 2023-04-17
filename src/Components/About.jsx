import React from 'react'
import { Descriptions } from 'antd';
import {
    QqOutlined
  } from '@ant-design/icons';

function About() {
  return (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Dheeraj Panchal</Descriptions.Item>
    <Descriptions.Item label="Telephone">9339933993</Descriptions.Item>
    <Descriptions.Item label="Live">Antarctica</Descriptions.Item>
    <Descriptions.Item label="Address">
       On large ice-berg, Near polar bear cave, Antarctica {' '}<QqOutlined/>
    </Descriptions.Item>
  </Descriptions>
);
  
}

export default About
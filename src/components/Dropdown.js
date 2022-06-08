import React from 'react'
import { Dropdown, Menu,} from 'antd';
import {LogoutOutlined, SettingOutlined, GoogleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';


const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a rel="noopener noreferrer" href="javascript:void(0)">
              Account Settings
            </a>
          ),
          icon: <SettingOutlined />
        },
        {
          key: '2',
          label: (
            <a rel="noopener noreferrer" href="javascript:void(0)">
              Support
            </a>
          ),
          icon: <GoogleOutlined />
        },
        {
          key: '3',
          label: (
            <a rel="noopener noreferrer" href="javascript:void(0)">
              Sign Out
            </a>
          ),
          icon: <LogoutOutlined />
        },
        // {
        //   key: '4',
        //   danger: true,
        //   label: 'a danger item',
        // },
      ]}
    />
  );

export default function DropdownMenu() {

  return (
    <div>
        <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
            <img className="inline-block h-8 w-8 rounded-full" src="images/img_one.jpg" alt="User Avater"/>
            </a>
        </Dropdown>
    </div>
  )
}

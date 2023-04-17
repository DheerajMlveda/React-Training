import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useState } from 'react';
const DropDown = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: 'User-1',
      key: '1',
    },
    {
      label: 'User-2',
      key: '2',
    },
    {
      label: 'Close.',
      key: '3',
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a href='/'onClick={(e) => e.preventDefault()}>
        <Space>
          Select One
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default DropDown;
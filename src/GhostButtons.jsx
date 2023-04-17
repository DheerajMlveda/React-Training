import { Button, Space } from 'antd';

const GhostButtons = () => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button ghost type="dashed">
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
      <Button type="primary" ghost>
        Primary
      </Button>
    </Space>
  

  );
}
export default GhostButtons;


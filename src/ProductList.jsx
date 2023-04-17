import { Table } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function ProductList() {

  const navigate = useNavigate();

 
  function deleteRow(event) {
    console.log(event)
  }

  
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Count', dataIndex: 'count', key: 'count' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button type="primary" onClick={(event) => { deleteRow(event) }}>Delete</Button>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'Baseball bat',
      count: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Basket ball',
      count: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Rocket',
      count: 2,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
        dataSource={data}
      />
      <Button type="primary" onClick={() => {
        navigate('/addProduct')
      }}>
        Add new product
      </Button>
     




  
    </>


  )
}

export default ProductList






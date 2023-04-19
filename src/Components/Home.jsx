import { Col, Grid, Row, Tag } from 'antd';

const { useBreakpoint } = Grid;
const Home = () => {
  const screens = useBreakpoint();
  return (

    <>
      {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ display: 'flext', alignItems: "center", justifyContent: 'center', height: "7%" }}>
      <Col className="gutter-row" style={{ border: "1px solid red", color: "brown", textAlign: 'left' }} span={8}>
        <Text code>
          col-1
        </Text>
      </Col>
      <Col className="gutter-row" style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>
        <Text code>
          col-2
        </Text>
      </Col>
      <Col className="gutter-row" style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>
        <Text code>
          col-3
        </Text>
      </Col>
    </Row> */}
      <Row>

        <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8} >col-1</Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-2</Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-3</Col>

      </Row>
      {/* <Row>

        <Col  xs={{order:1 , span:3}} sm={12} md={12} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8} >col-4</Col>

        <Col push={12} xs={24} sm={24} md={24} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-5</Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-6</Col>

      </Row> */}

      {/* 
      <Row>
        <Col style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-7</Col>
        <Col style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-8</Col>
        <Col style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={8}>col-9</Col>
      </Row>


      <Row>
        <Col style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={12}>
          col-10
        </Col>
        <Col style={{ border: "1px solid red", color: "brown", textAlign: 'center' }} span={12}>
          col-12
        </Col>
      </Row> */}
    </>
  );
}
export default Home;
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu, theme,Table,Card,Button,Modal,Row,Col,Form,Input, DatePicker, Switch } from 'antd';
import { render } from '@testing-library/react';
const { Header, Content, Footer } = Layout;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalTwo = () => {
    setIsModalOpenTwo(true);
  };
  const handleOkTwo = () => {
    setIsModalOpenTwo(false);
  };
  const handleCancelTwo = () => {
    setIsModalOpenTwo(false);
  };
  const dataSource = [
    {
      key: '1',
      name: 'Sham Sunder',
      mobile: 9988998811,
      doj: '11/03/1990',
      email: 'sham. sunder@hutechsolutions. com',
      align: "left",
    },
    {
      key: '2',
      name: 'Surinder Kumar',
      mobile: 9988998822,
      doj: '10/02/1986',
      email: 'sham. sunder@hutechsolutions. com',
      align: "left",
    },
    {
      key: '3',
      name: 'Pritam Singh',
      mobile: 9988998822,
      doj: '10/02/1995',
      email: 'sham. sunder@hutechsolutions. com',
      align: "left",
    },
    {
      key: '4',
      name: 'Rana Seth',
      mobile: 9988998822,
      doj: '11/01/2000',
      email: 'sham. sunder@hutechsolutions. com',
      align: "left",
    },
    
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: "left",
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
      align: "left",
    },
    {
      title: 'Date of Birth',
      dataIndex: 'doj',
      key: 'doj',
      align: "left",
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: "left",
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: "left",
      render: (_, record) => (
        <>
          <div
            className="employee-button"
          >
            <Switch />
          </div>
        </>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      align: "left",
      render: (text) => <><Button type='text' onClick={showModalTwo}><a style={{color:"blue"}}>Edit</a></Button></>,
    },
  ];
  return (
    <div className="App">
      <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            // background: colorBgContainer,
          }}
        >
          <Card
            extra={<><Button type="primary" onClick={showModal}>Add a User</Button></>}
          >
            <Table 
              dataSource={dataSource}
              columns={columns}
            />
          </Card>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Demo Application
      </Footer>
    </Layout>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}  width={1000}>
        <Form layout='vertical'>
          <Row gutter={[16,16]}>
            <Col span={8}>
              <Form.Item label="First Name" required>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mobile" required>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Email" required>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Date of Birth">
                <DatePicker style={{ width:"100%" }}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Modal title="Basic Modal" open={isModalOpenTwo} onOk={handleOkTwo} onCancel={handleCancelTwo} footer={null}  width={1000}>
        <Form layout='vertical'>
          <Row gutter={[16,16]}>
            <Col span={8}>
              <Form.Item label="First Name" required>
                <Input 
                  defaultValue="Sham Sunder"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mobile" required>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Email" required>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Date of Birth">
                <DatePicker style={{ width:"100%" }}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default App;

import { Button, Form, Input, Select, Checkbox } from 'antd';
import { useState, useRef } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;




const AddProduct = () => {

  const [pswd, setPswd] = useState('')
  const [componentDisabled, setComponentDisabled] = useState(true)
  const formRef = useRef(null);
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  }
  const name = Form.useWatch('username', form)
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        formRef.current?.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        formRef.current?.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        formRef.current?.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
        break;
    }
  };

  const onFill = () => {
    formRef.current?.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >{componentDisabled ? "Enable" : "Disable"} form</Checkbox>
      <Form form={form}

        {...formItemLayout}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        size='small'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        ref={formRef}
        disabled={componentDisabled}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder='Enter your name here' />

        </Form.Item>
        {name}
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
            },
            {
              type: 'url',
              warningOnly: true,
            },
            {
              type: 'string',
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => { ; setPswd(e.target.value) }} />
        </Form.Item>
        <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: "optional",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>

          <Form.List
            name="names"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error('At least 2 passengers'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    label={index === 0 ? 'Passengers' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input passenger's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="passenger name"
                        style={{
                          width: '60%',
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '60%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{
                      width: '60%',
                      marginTop: '20px',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field at head
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default AddProduct;
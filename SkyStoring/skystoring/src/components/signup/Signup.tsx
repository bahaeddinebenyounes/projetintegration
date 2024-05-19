import React, { useState } from 'react';
import axios from 'axios';
import { CascaderProps, message } from 'antd';  // Import message from Ant Design for error handling
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import './Signup.css';
import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation


const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}



const Signup: React.FC = () => {
  const navigate = useNavigate();  // React Router's navigation hook

  const [form] = Form.useForm();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onFinish = async (values: any) => {
    try {
      console.log('Form values:', values); // Log form values for debugging
      
      const response = await axios.post('http://localhost:8000/auth/signup/', {
        username: values.Username,
        email: values.email,
        password: values.password,
        role: values.role, // Include the role field in the request data
      });
  
      console.log('Response from server:', response.data);
  
      // Redirect to another page after successful signup
      navigate('/signin');  // Update the URL as needed
  
      console.log('Redirected to /signin');
    } catch (error) {
      console.error('Signup error:', error);
      message.error('Failed to sign up. Please check your information.');
    }
  };
  
  

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (

        <div className='signup-container'>
          <div className='signup-container2'>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
            <div style={{ textAlign: "center", marginTop:"20px",}}>
            <h1 style={{color:'#003366'}}> careconnect</h1>
            <h3 style={{color:'#003366'}}>create your account</h3>
            </div>
            
            <div className='input'>
        <Form.Item
      name="Username"

      tooltip="What do you want others to call you?"
      rules={[
        { required: true, message: 'Please input your nickname!', whitespace: true },
      ]}
    >
      <Input
        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your username"
        value={username} onChange={(e) => setUsername(e.target.value)}
      />
    </Form.Item>
        
    <Form.Item
      name="email"
      rules={[
        {
          type: 'email',
          message: 'The input is not a valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input
        prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your E-mail"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Item>


    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password
        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your password"
        value={password} onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      name="confirm"
      dependencies={['password']}
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered does not match!'));
          },
        }),
      ]}
    >
      <Input.Password
        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Confirm your password"
      />
    </Form.Item>
    <Form.Item name="role" rules={[{ required: true, message: 'Please select your role!' }]}>
  <Select placeholder="Select your role">
    <Option value="parent">Parent</Option>
    <Option value="babysitter">Babysitter</Option>
  </Select>
</Form.Item>
    </div>
          <div style={{ marginLeft:"80px",textAlign: "center", marginTop:"20px"}}>
            <p style={{color:'#003366',fontWeight:'bold'}}>already have an account ?<Link to="/signin">login</Link></p></div>
            <div className='input2'>
          <Form.Item >
            
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          </div>
        </Form>
        </div>
        </div>

  );
};

export default Signup;
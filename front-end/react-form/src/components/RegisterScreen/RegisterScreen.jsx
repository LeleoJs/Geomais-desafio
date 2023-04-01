import { AlignCenterOutlined } from '@ant-design/icons';
import {Layout, Form, Button, DatePicker,Select,Input} from 'antd'
import classes from './RegisterScreen.module.css'

const {Header, Content, Footer, Sider}=Layout;

function RegisterScreen(){
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </Header>
            <Content className={classes.content}>
                <Form className={classes.form}>
                    <Form.Item name={"fullName"} label={"Full Name"}>
                        <Input placeholder='Type your full name'></Input>
                    </Form.Item>
                    <Form.Item name={"cpfRg"} label={"CPF/RG"}>
                        <Input placeholder='Type your CPF or RG'></Input>
                    </Form.Item>
                    <Form.Item name={"birthDay"} label={"Birthday"}>
                        <DatePicker placeholder='Select birthday'></DatePicker>
                    </Form.Item>
                    <Form.Item name={"gender"} label={"Gender"}>
                        <Select placeholder='Select your gender'>
                            <Select.Option value='male'>Male</Select.Option>
                            <Select.Option value='female'>Female</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Content>
            <Footer className={classes.footer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Footer>
        </Layout>
    );
}

export default RegisterScreen;
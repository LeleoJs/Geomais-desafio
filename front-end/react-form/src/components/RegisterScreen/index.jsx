import { Layout, Form, Button, DatePicker, Select, Input } from 'antd'
import dayjs from 'dayjs'
import  { useUserListContext } from '../../contexts/UserListContext';
import classes from './RegisterScreen.module.css'

const { Header, Content, Footer, Sider } = Layout;

function RegisterScreen() {
    const [userList, setUserList]= useUserListContext()

    console.log(userList);
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Cadastrar Novos Usuários</h1>
            </Header>
            <Content className={classes.content}>
                    <Form labelCol={{ span: 7 }} wrappercol className={classes.form} onFinish={(values)=> {
                        const user = { ...values, birthDay: values.birthDay.format('DD/MM/YYYY')}
                        setUserList([...userList, user])
                    }}>
                        <Form.Item name={"fullName"} label={"Full Name"} autoComplete='off' rules={[
                            {
                                required:true,
                                message: "Please enter your name",
                            },
                        ]}>
                            <Input placeholder='Type your full name'></Input>
                        </Form.Item>
                        <Form.Item name={"birthDay"} label={"Birthday"} getValueProps={value => dayjs(value, 'DD/MM/YYYY')}  rules={[
                            {
                                required:true,
                                message: "Please enter your birthday",
                            },
                        ]}>
                            <DatePicker placeholder='Select birthday' placement={'topLeft'} style={{width:'100%'}}></DatePicker>
                        </Form.Item>
                        <Form.Item name={"cpfRg"} label={"CPF/RG"} autoComplete='off' rules={[
                            {
                                required:true,
                                message: "Please enter your CPF or RG",
                            },
                            {
                                whitespace:true
                            },
                            {
                                min:7,
                                message: "Minimum seven digits",
                            }
                        ]}>
                            <Input placeholder='Type your CPF or RG'></Input>
                        </Form.Item>
                        <Form.Item name={"gender"} label={"Gender"} rules={[
                            {
                                required:true,
                                message: "Please select your gender",
                            },
                        ]}>
                            <Select placeholder='Select your gender'>
                                <Select.Option value='male'>Male</Select.Option>
                                <Select.Option value='female'>Female</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name='submit' label=''>
                            <Button block type='primary' htmlType='submit'>Submit</Button>
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
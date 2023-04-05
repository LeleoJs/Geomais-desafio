import {Layout, Table} from 'antd'
import { useUserListContext } from '../../contexts/UserListContext';
import classes from './ListScreen.module.css'

const {Header, Content, Footer, Sider}=Layout;

function ListScreen(){
    const [userList] = useUserListContext();
    console.log(userList)

    const usersAttributs=[{
        title:'Name',
        dataIndex:'fullName',
        key:'fullName'
    },
    {
        title:'CPF/RG',
        dataIndex:'cpfRg',
        key:'cpfRg'
    },
    {
        title:'Birthday',
        dataIndex:'birthDay',
        key:'birthDay'
    },
    {
        title:'Gender',
        dataIndex:'gender',
        key:'gender'
    },
    ];
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Lista de Usuários Cadastrados</h1>
            </Header>
            <Content className={classes.content}>
                <Table dataSource={userList} columns={usersAttributs}></Table>
            </Content>
            <Footer className={classes.footer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Footer>
        </Layout>
    );
}

export default ListScreen;
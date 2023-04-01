import { Layout, Statistic } from "antd";
import { HomeOutlined } from '@ant-design/icons'
import 'antd/dist/reset.css';

import classes from './InitialScreen.module.css'
import ListScreen from '../ListScreen/ListScreen'
import RegisterScreen from '../RegisterScreen/RegisterScreen'

const { Header, Content, Footer, Sider } = Layout;

function InitialScreen({actualPage}) {
        if(actualPage=="1"){
            return <CurrenctPage></CurrenctPage>
        }
        else if(actualPage=="2"){
            return <RegisterScreen></RegisterScreen>
        }
        else if(actualPage=="3"){
            return <ListScreen></ListScreen>
        }
        else{
            <h1>Erro</h1>
        }
}

function CurrenctPage() {
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </Header>
            <Content className={classes.content}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis cum, alias harum voluptate modi dolorem! Dolorum maiores placeat error reiciendis quidem, nostrum perferendis dicta laboriosam dolor sapiente deserunt dolores eos.</p>
                <Statistic title="Cadastros" value={10} precision={0}></Statistic>
            </Content>
            <Footer className={classes.footer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Footer>
        </Layout>
    );
}

export default InitialScreen;
import {Layout} from 'antd'
import classes from './ListScreen.module.css'

const {Header, Content, Footer, Sider}=Layout;

function ListScreen(){
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </Header>
            <Content className={classes.content}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis cum, alias harum voluptate modi dolorem! Dolorum maiores placeat error reiciendis quidem, nostrum perferendis dicta laboriosam dolor sapiente deserunt dolores eos.</p>
            </Content>
            <Footer className={classes.footer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Footer>
        </Layout>
    );
}

export default ListScreen;
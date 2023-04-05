import { Layout, Statistic } from "antd";
import { HomeOutlined } from '@ant-design/icons'
import 'antd/dist/reset.css';

import React, { useMemo } from "react";

import classes from './InitialScreen.module.css'
import ListScreen from '../ListScreen'
import RegisterScreen from '../RegisterScreen'
import { UserListContextProvider } from "../../contexts/UserListContext";

const { Header, Content, Footer } = Layout;

function InitialScreen({ actualPage }) {
    
    const page = useMemo(() => {
        if (actualPage == "1") {
            return <CurrenctPage />
        }

        if (actualPage == "2") {
            return <RegisterScreen />
        }

        if (actualPage == "3") {
            return <ListScreen />
        }
        
        return <h1>Erro</h1>
    }, [actualPage])

    return <UserListContextProvider>
        {page}
    </UserListContextProvider>
}

function CurrenctPage() {
    console.log('render')
    return (
        <Layout>
            <Header className={classes.header}>
                <h1>Bem Vindo ao Software de Cadastro de Usuário</h1>
            </Header>
            <Content className={classes.content}>
                <Statistic title="Cadastros" value={10} precision={0}></Statistic>
            </Content>
            <Footer className={classes.footer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Footer>
        </Layout>
    );
}

export default InitialScreen;
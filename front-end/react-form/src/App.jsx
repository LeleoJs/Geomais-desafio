import React from "react";

import './App.css';
import InitialScreen from "./components/InitialScreen/InitialScreen";

import { Layout, Statistic } from "antd";
import 'antd/dist/reset.css';

import SideBar from './components/SideBar/SideBar'

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [actualPage,setActualPage]=React.useState("1");
  return (
    <div className="App">
      <header className="App-header">
        <Layout style={{ width: '100vw' }}>
            <Sider>
                <SideBar actualPage={actualPage} setActualPage={setActualPage}></SideBar>
            </Sider>
            <InitialScreen actualPage={actualPage}></InitialScreen>
        </Layout>
      </header>
    </div>
  );
}

export default App;
